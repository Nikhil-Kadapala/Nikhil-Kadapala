import type { MetadataRoute } from "next";
import { PUBLIC_WRITING_TYPES } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/site";
import { listDiscoverableWritingPosts } from "@/lib/writing";

export const dynamic = "force-static";

const paths = ["", "about", "research", "writing", "projects", "github"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));

  const typeIndexes = PUBLIC_WRITING_TYPES.map((type) => ({
    url: absoluteUrl(`writing/type/${type}`),
    lastModified: new Date(),
  }));

  const posts = listDiscoverableWritingPosts().map((post) => ({
    url: absoluteUrl(`writing/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
  }));

  return [...pages, ...typeIndexes, ...posts];
}
