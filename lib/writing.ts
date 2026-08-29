import fs from "node:fs";
import path from "node:path";
import type { ReactElement } from "react";
import matter from "gray-matter";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { extractArticleHeadings, type ArticleHeading } from "@/lib/article-headings";
import { remarkCodeFilename } from "@/lib/remark-code-filename";
import {
  WRITING_DIR_TO_TYPE,
  WRITING_TYPE_DIRS,
  writingFrontmatterSchema,
  type WritingFrontmatter,
  type WritingType,
} from "@/lib/schemas";

const WRITING_ROOT = path.join(process.cwd(), "content/writing");

export type WritingPost = WritingFrontmatter & {
  slug: string;
  filepath: string;
};

function showDrafts(): boolean {
  return process.env.VERCEL_ENV !== "production";
}

function formatZodError(filepath: string, error: { issues: { path: PropertyKey[]; message: string }[] }): string {
  const details = error.issues.map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`).join("; ");
  return `Invalid frontmatter in ${filepath}: ${details}`;
}

function parseWritingFile(filepath: string, raw: string): { post: WritingPost; body: string } {
  const { data, content } = matter(raw);
  const parsed = writingFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(formatZodError(filepath, parsed.error));
  }

  const slug = path.basename(filepath, ".mdx");
  const folder = path.basename(path.dirname(filepath));
  const expectedType = WRITING_DIR_TO_TYPE[folder as keyof typeof WRITING_DIR_TO_TYPE];
  if (!expectedType) {
    throw new Error(`${filepath} is not in a writing type folder`);
  }
  if (parsed.data.type !== expectedType) {
    throw new Error(
      `${filepath}: frontmatter type "${parsed.data.type}" does not match folder "${folder}" (expected ${expectedType})`,
    );
  }

  return {
    post: { ...parsed.data, slug, filepath },
    body: content,
  };
}

const readAllWritingPosts = cache((): WritingPost[] => {
  const posts: WritingPost[] = [];
  const slugs = new Map<string, string>();

  for (const type of Object.keys(WRITING_TYPE_DIRS) as WritingType[]) {
    const dir = path.join(WRITING_ROOT, WRITING_TYPE_DIRS[type]);
    if (!fs.existsSync(dir)) continue;

    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith(".mdx")) continue;
      const filepath = path.join(dir, name);
      const raw = fs.readFileSync(filepath, "utf8");
      const { post } = parseWritingFile(filepath, raw);
      const existing = slugs.get(post.slug);
      if (existing) {
        throw new Error(`Duplicate writing slug "${post.slug}" in ${existing} and ${filepath}`);
      }
      slugs.set(post.slug, filepath);
      posts.push(post);
    }
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
});

export const listWritingPosts = cache((options?: { includeDrafts?: boolean }): WritingPost[] => {
  const includeDrafts = options?.includeDrafts ?? showDrafts();
  const posts = readAllWritingPosts();
  return includeDrafts ? posts : posts.filter((post) => !post.draft);
});

export function listPublishedWritingPosts(): WritingPost[] {
  return listWritingPosts({ includeDrafts: false });
}

export const getWritingPost = cache((slug: string): WritingPost | null => {
  return listWritingPosts().find((post) => post.slug === slug) ?? null;
});

export async function compileWritingPost(
  slug: string,
): Promise<{ post: WritingPost; content: ReactElement; headings: ArticleHeading[] } | null> {
  const post = getWritingPost(slug);
  if (!post) return null;

  const raw = fs.readFileSync(post.filepath, "utf8");
  const { body } = parseWritingFile(post.filepath, raw);
  const { content } = await compileMDX({
    source: body,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkCodeFilename],
      },
    },
  });

  return { post, content, headings: extractArticleHeadings(body) };
}
