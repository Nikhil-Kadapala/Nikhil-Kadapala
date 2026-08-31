import Link from "next/link";
import { projects } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "GitHub",
  description: "A small, curated set of repositories. For everything else, visit the profile.",
};

export default function GitHub() {
  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">GitHub</p>
        <h1>The code behind the questions.</h1>
        <p>A small, curated set of repositories. For everything else, visit the profile.</p>
      </section>
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>Open source is part of the argument.</h2>
            <p className="muted">The best way to understand the research is often to inspect the system that made the claim.</p>
            <Button asChild>
              <Link href="https://github.com/Nikhil-Kadapala" target="_blank" rel="noopener noreferrer">
                Open full profile ↗
              </Link>
            </Button>
          </div>
          <div className="list flex flex-col gap-4">
            {projects
              .filter((p) => p.repo)
              .map((p) => (
                <a
                  key={p.slug}
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-inherit no-underline"
                >
                  <Card size="sm" className="cursor-pointer">
                    <CardHeader>
                      <CardTitle>{p.name}</CardTitle>
                      <CardDescription>{p.summary}</CardDescription>
                      <CardAction>
                        <span className="link-arrow">View</span>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <span className="mono muted">repo</span>
                    </CardContent>
                  </Card>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
