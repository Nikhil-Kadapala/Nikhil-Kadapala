import { listDiscoverableWritingPosts } from "@/lib/writing";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = listDiscoverableWritingPosts()
    .map((post) => {
      const pubDate = new Date(`${post.date}T00:00:00.000Z`).toUTCString();
      return `<item><title>${escapeXml(post.title)}</title><link>${absoluteUrl(`writing/${post.slug}`)}</link><description>${escapeXml(post.description)}</description><pubDate>${pubDate}</pubDate></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(site.name)}</title><link>${site.url}</link><description>${escapeXml(site.description)}</description>${items}</channel></rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
