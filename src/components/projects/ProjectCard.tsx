import Link from "next/link";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  return (
    <article className={cn("card", dark && "card-dark")}>
      <span className="tag">{project.kind}</span>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div className="card-foot">
        <span className="mono muted">{project.status}</span>
        <Link className="link-arrow" href={`/projects/${project.slug}`}>
          Case study
        </Link>
      </div>
    </article>
  );
}
