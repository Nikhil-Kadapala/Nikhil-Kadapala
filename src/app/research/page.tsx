import Link from "next/link";
import { research } from "@/lib/content";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Research",
  description: "Work on claim extraction, agent behavior, and the systems around knowledge.",
};

export default function Research() {
  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">Research</p>
        <h1>Useful is a harder target than accurate.</h1>
        <p>Work on claim extraction, agent behavior, and the systems around knowledge.</p>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="list flex flex-col gap-4">
            {research.map((r) => (
              <Link key={r.slug} href={`/research/${r.slug}`} className="block text-inherit no-underline">
                <Card size="sm" className="cursor-pointer">
                  <CardHeader>
                    <CardTitle>{r.title}</CardTitle>
                    <CardDescription>{r.summary}</CardDescription>
                    <CardAction>
                      <span className="link-arrow">Read</span>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <span className="mono muted">
                      {r.year}
                      {r.tags.length ? ` · ${r.tags.join(" · ")}` : ""}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
