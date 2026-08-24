import { writing } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = writing
    .map(
      (post) =>
        `<item><title>${post.title}</title><link>${absoluteUrl(`writing/${post.slug}`)}</link><description>${post.excerpt}</description><pubDate>${new Date(post.date).toUTCString()}</pubDate></item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${site.description}</description>${items}</channel></rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
