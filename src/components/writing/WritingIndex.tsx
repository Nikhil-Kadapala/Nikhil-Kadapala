import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PUBLIC_WRITING_TYPES,
  WRITING_TYPE_LABELS,
  isUnlistedWritingType,
  writingTypePath,
  type WritingType,
} from "@/lib/schemas";
import { listWritingPosts } from "@/lib/writing";

export type WritingListItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  type: WritingType;
  tags: string[];
  draft: boolean;
};

export function loadWritingListItems(options?: { includeUnlisted?: boolean }): WritingListItem[] {
  const includeUnlisted = options?.includeUnlisted ?? false;
  return listWritingPosts()
    .filter((post) => includeUnlisted || !isUnlistedWritingType(post.type))
    .map(({ slug, title, date, description, type, tags, draft }) => ({
      slug,
      title,
      date,
      description,
      type,
      tags,
      draft,
    }));
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
        {PUBLIC_WRITING_TYPES.map((type) => (
          <Link
            key={type}
            href={writingTypePath(type)}
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
        <div className="list flex flex-col gap-4">
          {visible.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="block text-inherit no-underline">
              <Card size="sm" className="cursor-pointer">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <CardAction>
                    <span className="link-arrow">Read</span>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <span className="mono muted">
                    {post.date}
                    {post.draft ? " · Draft" : ""}
                    {` · ${WRITING_TYPE_LABELS[post.type]}`}
                    {post.tags.length ? ` · ${post.tags.join(" · ")}` : ""}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
