import { WritingIndexView, parseWritingTypeParam } from "@/components/writing-list";
import { listWritingPosts } from "@/lib/writing";

export const metadata = {
  title: "Writing",
  description: "Notes on agents, evaluation, retrieval, and the gap between a demo and useful work.",
};

export default async function Writing({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const posts = listWritingPosts().map(({ slug, title, date, description, type, tags, draft }) => ({
    slug,
    title,
    date,
    description,
    type,
    tags,
    draft,
  }));
  const { type } = await searchParams;
  const activeType = parseWritingTypeParam(type);

  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">Writing</p>
        <h1>Notes from the edge of the system.</h1>
        <p>Short observations on agents, evaluation, retrieval, and the gap between a demo and useful work.</p>
      </section>
      <section className="section">
        <div className="wrap">
          <WritingIndexView posts={posts} activeType={activeType} />
        </div>
      </section>
    </>
  );
}
