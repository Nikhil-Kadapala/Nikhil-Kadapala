import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { research } from "@/lib/content";

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = research.find((entry) => entry.slug === slug);
  if (!item) return { title: "Not found" };

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function Paper({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = research.find((entry) => entry.slug === slug);
  if (!item) return notFound();

  return (
    <article className="prose-page">
      <div className="wrap prose">
        <p className="eyebrow mono">
          Research · {item.year}
        </p>
        <h1>{item.title}</h1>
        <p className="lead">{item.summary}</p>
        <div className="meta mono muted">{item.tags.join(" · ")}</div>
        <p>{item.detail}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {item.links.map((link) => (
            <Link className="btn" href={link.href} key={link.href}>
              {link.label} ↗
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 48 }}>
          <Link className="link-arrow" href="/research">
            Back to research
          </Link>
        </p>
      </div>
    </article>
  );
}
