import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WRITING_TYPES = new Set(["case-study", "build-log", "research", "teaching"]);

export function middleware(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");
  if (!type || !WRITING_TYPES.has(type)) return NextResponse.next();
  return NextResponse.redirect(new URL(`/writing/type/${type}`, request.url), 308);
}

export const config = {
  matcher: "/writing",
};
