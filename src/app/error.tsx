"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="page-head wrap">
      <p className="eyebrow mono">Error</p>
      <h1>Something went wrong.</h1>
      <p>The page could not load. Try again or head back home.</p>
      <p className="flex flex-wrap items-center gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="link" asChild>
          <Link href="/">Back home</Link>
        </Button>
      </p>
    </section>
  );
}
