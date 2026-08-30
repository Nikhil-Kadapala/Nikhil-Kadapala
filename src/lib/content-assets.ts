import fs from "node:fs";
import path from "node:path";

export const CONTENT_ASSETS_ROOT = path.join(process.cwd(), "content/assets");

const ASSET_PATH = /^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/;

const MIME_BY_EXT: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".webm": "video/webm",
  ".webp": "image/webp",
};

export function isContentAssetId(value: string): boolean {
  return ASSET_PATH.test(value) && !value.includes("..") && !value.startsWith("/");
}

export function contentAssetUrl(id: string): string {
  return `/content-assets/${id.split("/").map(encodeURIComponent).join("/")}`;
}

export function resolveContentAsset(id: string): { absolutePath: string; mime: string } | null {
  if (!isContentAssetId(id)) return null;

  const absolutePath = path.resolve(CONTENT_ASSETS_ROOT, id);
  const relative = path.relative(CONTENT_ASSETS_ROOT, absolutePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;

  const mime = MIME_BY_EXT[path.extname(absolutePath).toLowerCase()];
  if (!mime) return null;
  if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) return null;

  return { absolutePath, mime };
}
