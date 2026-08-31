import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Not found" };

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <article className="prose-page">
      <div className="wrap prose">
        <p className="eyebrow mono">{project.kind}</p>
        <h1>{project.name}</h1>
        <p className="lead">{project.summary}</p>
        <div className="meta mono muted">
          {project.status} · {project.tags.join(" · ")}
        </div>
        <p>{project.detail}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={project.href}>
              Open project ↗
            </Link>
          </Button>
          {project.repo ? (
            <Button asChild>
              <Link href={project.repo}>
                GitHub ↗
              </Link>
            </Button>
          ) : null}
        </div>
        <p>
          <Link className="link-arrow" href="/projects">
            Back to projects
          </Link>
        </p>
      </div>
    </article>
  );
}
