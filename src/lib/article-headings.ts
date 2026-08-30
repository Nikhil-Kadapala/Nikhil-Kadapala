export type ArticleHeading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export function slugifyHeading(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractArticleHeadings(markdown: string): ArticleHeading[] {
  const withoutFences = markdown.replace(/```[\s\S]*?```/g, "");
  const headings: ArticleHeading[] = [];

  for (const line of withoutFences.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;
    const depth = match[1].length === 2 ? 2 : 3;
    const text = match[2].replace(/\s*\{#[^}]+\}\s*$/, "").trim();
    if (!text) continue;
    headings.push({ id: slugifyHeading(text), text, depth });
  }

  return headings;
}
