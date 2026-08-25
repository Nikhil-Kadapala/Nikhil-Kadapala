import Link from "next/link";
import { cn } from "@/lib/utils";
import { WRITING_TYPES, WRITING_TYPE_LABELS, isWritingType, type WritingType } from "@/lib/schemas";

export type WritingListItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  type: WritingType;
  tags: string[];
  draft: boolean;
};

export function parseWritingTypeParam(value: string | string[] | undefined): WritingType | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw || !isWritingType(raw)) return undefined;
  return raw;
}

export function WritingIndexView({
  posts,
  activeType,
}: {
  posts: WritingListItem[];
  activeType?: WritingType;
}) {
  const visible = activeType ? posts.filter((post) => post.type === activeType) : posts;

  return (
    <>
      <nav className="type-filters mono muted" aria-label="Filter writing by type">
        <Link href="/writing" aria-current={!activeType ? "page" : undefined} className={cn(!activeType && "is-active")}>
          All
        </Link>
        {WRITING_TYPES.map((type) => (
          <Link
            key={type}
            href={`/writing?type=${type}`}
            aria-current={activeType === type ? "page" : undefined}
            className={cn(activeType === type && "is-active")}
          >
            {WRITING_TYPE_LABELS[type]}
          </Link>
        ))}
      </nav>
      {visible.length === 0 ? (
        <p className="muted">No posts in this category yet.</p>
      ) : (
        <div className="list">
          {visible.map((post) => (
            <Link className="list-item" href={`/writing/${post.slug}`} key={post.slug}>
              <span className="mono muted">{post.date}</span>
              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="mono muted list-tags">
                  {post.draft ? "Draft · " : ""}
                  {WRITING_TYPE_LABELS[post.type]}
                  {post.tags.length ? ` · ${post.tags.join(" · ")}` : ""}
                </div>
              </div>
              <span className="link-arrow">Read</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
