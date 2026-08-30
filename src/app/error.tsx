"use client";

import Link from "next/link";

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
      <p>
        <button className="btn" type="button" onClick={() => reset()}>
          Try again
        </button>{" "}
        <Link className="link-arrow" href="/">
          Back home
        </Link>
      </p>
    </section>
  );
}
