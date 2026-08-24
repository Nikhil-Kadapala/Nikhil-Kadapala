import type { Metadata } from "next";
// Commit Mono is the mono Mastra ships; it is not on Google Fonts, so it is
// self-hosted via Fontsource (OFL-1.1).
import "@fontsource/commit-mono/latin-400.css";
import "@fontsource/commit-mono/latin-500.css";
import "@fontsource/commit-mono/latin-600.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Researcher & builder`, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: { title: site.name, description: site.description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
