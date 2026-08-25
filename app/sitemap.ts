import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { listPublishedWritingPosts } from "@/lib/writing";

export const dynamic = "force-static";

const paths = ["", "about", "research", "writing", "projects", "github"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));

  const posts = listPublishedWritingPosts().map((post) => ({
    url: absoluteUrl(`writing/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
  }));

  return [...pages, ...posts];
}
