export default function Loading() {
  return (
    <article className="prose-page" aria-busy="true" aria-label="Loading article">
      <div className="wrap prose">
        <p className="eyebrow mono">Loading</p>
        <h1>Loading article</h1>
        <p className="lead">The article is being prepared.</p>
        <div className="meta mono muted">Please wait</div>
        <p>
          The page will appear shortly.
        </p>
      </div>
    </article>
  );
}
