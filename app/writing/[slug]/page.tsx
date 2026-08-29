import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArticleToc } from "@/components/article/ArticleToc";
import { WRITING_TYPE_LABELS } from "@/lib/schemas";
import { contentAssetUrl, resolveContentAsset } from "@/lib/content-assets";
import { compileWritingPost, getWritingPost, listWritingPosts } from "@/lib/writing";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return listWritingPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function WritingPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const compiled = await compileWritingPost(slug);
  if (!compiled) notFound();

  const { post, content, headings } = compiled;
  if (post.cover && !resolveContentAsset(post.cover)) {
    throw new Error(`Missing cover file at content/assets/${post.cover}`);
  }

  const coverSrc = post.cover ? contentAssetUrl(post.cover) : null;
  const eyebrow = [
    post.draft ? "Draft" : null,
    WRITING_TYPE_LABELS[post.type],
    post.series ? `${post.series} · part ${post.part}` : null,
    post.date,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article>
      {coverSrc ? (
        <div className="cover-wrap">
          <figure className="cover-banner">
            <Image src={coverSrc} alt="" width={1224} height={524} unoptimized />
          </figure>
        </div>
      ) : null}
      <div className={cn("article-shell", coverSrc && "article-shell-after-cover")}>
        <ArticleToc headings={headings} />
        <div className="content-col">
          <p className="eyebrow mono">{eyebrow}</p>
          <h1 className="article-title">{post.title}</h1>
          <div className="byline-row">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
            <span>
              {site.name} · {post.date}
            </span>
            {post.paper ? (
              <a className="inline-link" href={post.paper} target="_blank" rel="noopener noreferrer">
                Paper
              </a>
            ) : null}
          </div>
          <p className="lead">{post.description}</p>
          {content}
          <p>
            <Link className="link-arrow" href="/writing">
              Back to writing
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
