import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head wrap">
      <p className="eyebrow mono">404</p>
      <h1>That page is not here.</h1>
      <p>The link may be old, or the page never existed.</p>
      <p>
        <Link className="link-arrow" href="/">
          Back home
        </Link>
      </p>
    </section>
  );
}
