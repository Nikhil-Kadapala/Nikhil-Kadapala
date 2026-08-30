import type { ReactNode } from "react";
import Image from "next/image";
import { CodeCopyButton } from "@/components/article/CodeCopyButton";
import { cn } from "@/lib/utils";

export function CodeBlock({
  file,
  html,
  code,
}: {
  file?: string;
  html: string;
  code: string;
}) {
  return (
    <div className="code-block breakout">
      <div className="code-head">
        <span className="code-file">{file ?? " "}</span>
        <CodeCopyButton code={code} />
      </div>
      <div className="code-body" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export function Callout({
  kind = "note",
  label,
  children,
}: {
  kind?: "note" | "tip" | "caveat" | "warning";
  label?: string;
  children: ReactNode;
}) {
  const warning = kind === "caveat" || kind === "warning";
  return (
    <aside className={cn("callout", warning && "warning")}>
      <span className="callout-label">{label ?? (warning ? "Caveat" : "Note")}</span>
      {children}
    </aside>
  );
}

export function Figure({
  src,
  alt,
  index,
  caption,
}: {
  src: string;
  alt: string;
  index: string;
  caption: string;
}) {
  return (
    <figure className="figure breakout">
      <Image src={src} alt={alt} width={940} height={528} unoptimized />
      <figcaption>
        <span className="cap-index">FIG. {index}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export function MediaEmbed({
  src,
  gif = false,
  poster,
}: {
  src: string;
  gif?: boolean;
  poster?: string;
}) {
  return (
    <div className="media-embed breakout">
      {gif ? <span className="gif-tag">GIF</span> : null}
      <video src={src} poster={poster} autoPlay={gif} loop={gif} muted={gif} playsInline={gif} controls={!gif} />
    </div>
  );
}

export function IframeEmbed({
  domain,
  description,
  src,
}: {
  domain: string;
  description: string;
  src?: string;
}) {
  return (
    <div className="iframe-embed breakout">
      <div className="embed-head">
        <span>{domain}</span>
        <span className="embed-src">{description}</span>
      </div>
      <div className="embed-body">
        {src ? (
          <iframe src={src} title={description} loading="lazy" allowFullScreen />
        ) : (
          <div className="embed-placeholder">▶ Embed preview — connect a live source</div>
        )}
      </div>
    </div>
  );
}

export function Footnotes({ children }: { children: ReactNode }) {
  return (
    <div className="footnotes">
      <div className="toc-label">Notes</div>
      <ol>{children}</ol>
    </div>
  );
}

export function CtaRow({ children }: { children: ReactNode }) {
  return <div className="cta-row">{children}</div>;
}
