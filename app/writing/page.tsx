import { WritingIndexView, loadWritingListItems } from "@/components/writing-list";

export const metadata = {
  title: "Writing",
  description: "Notes on agents, evaluation, retrieval, and the gap between a demo and useful work.",
};

export default function Writing() {
  const posts = loadWritingListItems();

  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">Writing</p>
        <h1>Notes from the edge of the system.</h1>
        <p>Short observations on agents, evaluation, retrieval, and the gap between a demo and useful work.</p>
      </section>
      <section className="section">
        <div className="wrap">
          <WritingIndexView posts={posts} />
        </div>
      </section>
    </>
  );
}
