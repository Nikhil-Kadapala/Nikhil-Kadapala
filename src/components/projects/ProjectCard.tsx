import Link from "next/link";
import type { Project } from "@/lib/content";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full text-inherit no-underline">
      <Card className="h-full cursor-pointer">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.summary}</CardDescription>
          <CardAction>
            <span className="tag">{project.kind}</span>
          </CardAction>
        </CardHeader>
        <CardFooter className="justify-between">
          <span className="mono muted">{project.status}</span>
          <span className="link-arrow">Case study</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
