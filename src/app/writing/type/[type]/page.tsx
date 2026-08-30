import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingIndexView, loadWritingListItems } from "@/components/writing/WritingIndex";
import {
  UNLISTED_PAGE_ROBOTS,
  WRITING_TYPES,
  WRITING_TYPE_INDEX,
  WRITING_TYPE_LABELS,
  isUnlistedWritingType,
  isWritingType,
} from "@/lib/schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return WRITING_TYPES.map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  if (!isWritingType(type)) return { title: "Not found" };
  const copy = WRITING_TYPE_INDEX[type];
  return {
    title: `${WRITING_TYPE_LABELS[type]} — Writing`,
    description: copy.description,
    ...(isUnlistedWritingType(type) ? { robots: UNLISTED_PAGE_ROBOTS } : {}),
  };
}

export default async function WritingTypeIndex({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!isWritingType(type)) notFound();

  const copy = WRITING_TYPE_INDEX[type];
  const posts = loadWritingListItems({ includeUnlisted: isUnlistedWritingType(type) });
  const label = WRITING_TYPE_LABELS[type];

  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">{label}</p>
        <h1>{copy.heading}</h1>
        <p>{copy.description}</p>
      </section>
      <section className="section">
        <div className="wrap">
          <WritingIndexView posts={posts} activeType={type} />
        </div>
      </section>
    </>
  );
}
