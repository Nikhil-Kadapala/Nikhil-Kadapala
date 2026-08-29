import type { MetadataRoute } from "next";
import { isUnlistedWritingType, UNLISTED_WRITING_TYPES, writingTypePath } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/site";
import { listWritingPosts } from "@/lib/writing";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const unlistedPaths = [
    ...UNLISTED_WRITING_TYPES.map(writingTypePath),
    ...listWritingPosts({ includeDrafts: true })
      .filter((post) => isUnlistedWritingType(post.type))
      .map((post) => `/writing/${post.slug}`),
  ];

  return {
    rules: { userAgent: "*", allow: "/", disallow: unlistedPaths },
    sitemap: absoluteUrl("sitemap.xml"),
  };
}
