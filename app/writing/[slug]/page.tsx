import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { WRITING_TYPE_LABELS } from "@/lib/schemas";
import { compileWritingPost, getWritingPost, listWritingPosts } from "@/lib/writing";

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

  const { post, content } = compiled;
  const eyebrow = [
    post.draft ? "Draft" : null,
    WRITING_TYPE_LABELS[post.type],
    post.series ? `${post.series} · part ${post.part}` : null,
    post.date,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="prose-page">
      <div className="wrap prose">
        <p className="eyebrow mono">{eyebrow}</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
        <p className="meta mono muted">
          {post.tags.join(" · ")}
          {post.paper ? (
            <>
              {post.tags.length ? " · " : null}
              <a href={post.paper} target="_blank" rel="noopener noreferrer">
                Paper
              </a>
            </>
          ) : null}
          {post.course ? `${post.tags.length || post.paper ? " · " : ""}${post.course}` : null}
        </p>
        {content}
        <p>
          <Link className="link-arrow" href="/writing">
            Back to writing
          </Link>
        </p>
      </div>
    </article>
  );
}
