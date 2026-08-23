import type { Metadata } from "next";
// Commit Mono is the mono Mastra ships; it is not on Google Fonts, so it is
// self-hosted via Fontsource (OFL-1.1).
import "@fontsource/commit-mono/latin-400.css";
import "@fontsource/commit-mono/latin-500.css";
import "@fontsource/commit-mono/latin-600.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


export const metadata: Metadata = {
  metadataBase: new URL("https://nikhil-kadapala.github.io"),
  title: { default: "Nikhil Kadapala — Researcher & builder", template: "%s — Nikhil Kadapala" },
  description: "Researcher and builder working on agent evaluations, memory, and knowledge systems.",
  authors: [{ name: "Nikhil Kadapala" }],
  openGraph: { title: "Nikhil Kadapala", description: "Researcher and builder working on agent evaluations, memory, and knowledge systems.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
