import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { research } from "@/lib/content";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-wrap gap-3">
          {item.links.map((link) => (
            <Button asChild key={link.href}>
              <Link href={link.href}>
                {link.label} ↗
              </Link>
            </Button>
          ))}
        </div>
        <p className="mt-12">
          <Link className="link-arrow" href="/research">
            Back to research
          </Link>
        </p>
      </div>
    </article>
  );
}
