import { NextResponse } from "next/server";
import fs from "node:fs";
import { resolveContentAsset } from "@/lib/content-assets";

export const dynamic = "force-static";

export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params;
  const id = segments.join("/");
  const asset = resolveContentAsset(id);
  if (!asset) {
    return new NextResponse("Not found", { status: 404 });
  }

  const body = fs.readFileSync(asset.absolutePath);
  return new NextResponse(body, {
    headers: {
      "Content-Type": asset.mime,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
