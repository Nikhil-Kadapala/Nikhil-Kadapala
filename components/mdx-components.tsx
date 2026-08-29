import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode, TableHTMLAttributes } from "react";
import { isValidElement } from "react";
import Link from "next/link";
import {
  Callout,
  CodeBlock,
  CtaRow,
  Figure,
  Footnotes,
  IframeEmbed,
  MediaEmbed,
} from "@/components/article/blocks";
import { slugifyHeading } from "@/lib/article-headings";
import { contentAssetUrl } from "@/lib/content-assets";
import { highlightCode } from "@/lib/shiki";

function headingText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(headingText).join("");
  if (isValidElement<{ children?: ReactNode }>(children) && children.props.children != null) {
    return headingText(children.props.children);
  }
  return "";
}

function MdxH2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? slugifyHeading(headingText(children));
  return (
    <h2 id={id} {...props}>
      {children}
    </h2>
  );
}

function MdxH3({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? slugifyHeading(headingText(children));
  return (
    <h3 id={id} {...props}>
      {children}
    </h3>
  );
}

function MdxLink({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  if (href?.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className="inline-link" {...props}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("http://") || href?.startsWith("https://")) {
    return (
      <a href={href} className="inline-link" target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className="inline-link" {...props}>
      {children}
    </a>
  );
}

function MdxBlockquote({ children }: { children?: ReactNode }) {
  return <blockquote className="pull-quote">{children}</blockquote>;
}

function MdxTable(props: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="content-table-wrap breakout">
      <table className="content-table" {...props} />
    </div>
  );
}

function codeFromNode(node: ReactNode): { code: string; lang: string; file?: string } {
  if (!isValidElement<{ className?: string; children?: ReactNode; "data-file"?: string }>(node)) {
    return { code: headingText(node), lang: "text" };
  }
  const className = node.props.className ?? "";
  const lang = /language-([\w-]+)/.exec(className)?.[1] ?? "text";
  return {
    code: headingText(node.props.children).replace(/\n$/, ""),
    lang,
    file: node.props["data-file"],
  };
}

async function MdxPre({
  children,
  ...props
}: HTMLAttributes<HTMLPreElement> & { "data-file"?: string; dataFile?: string }) {
  const extracted = isValidElement(children)
    ? codeFromNode(children)
    : { code: headingText(children), lang: "text" as const };
  const file = props["data-file"] ?? props.dataFile ?? extracted.file;
  const html = await highlightCode(extracted.code, extracted.lang);
  return <CodeBlock file={file} html={html} code={extracted.code} />;
}

function AssetFigure({
  file,
  alt,
  index,
  caption,
}: {
  file: string;
  alt: string;
  index: string;
  caption: string;
}) {
  return <Figure src={contentAssetUrl(file)} alt={alt} index={index} caption={caption} />;
}

function AssetMedia({
  file,
  gif,
  poster,
}: {
  file: string;
  gif?: boolean;
  poster?: string;
}) {
  return (
    <MediaEmbed
      src={contentAssetUrl(file)}
      gif={gif}
      poster={poster ? contentAssetUrl(poster) : undefined}
    />
  );
}

export const mdxComponents = {
  a: MdxLink,
  h2: MdxH2,
  h3: MdxH3,
  pre: MdxPre,
  blockquote: MdxBlockquote,
  table: MdxTable,
  Callout,
  CodeBlock: async function MdxCodeBlock({
    file,
    lang = "text",
    children,
  }: {
    file?: string;
    lang?: string;
    children: string;
  }) {
    const code = children.replace(/\n$/, "");
    const html = await highlightCode(code, lang);
    return <CodeBlock file={file} html={html} code={code} />;
  },
  Figure: AssetFigure,
  MediaEmbed: AssetMedia,
  IframeEmbed,
  Footnotes,
  CtaRow,
};
