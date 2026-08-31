import type { Metadata } from "next";
// Commit Mono is the mono Mastra ships; it is not on Google Fonts, so it is
// self-hosted via Fontsource (OFL-1.1).
import "@fontsource/commit-mono/latin-400.css";
import "@fontsource/commit-mono/latin-500.css";
import "@fontsource/commit-mono/latin-600.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Researcher & builder`, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: { title: site.name, description: site.description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // globals.css sets `html{scroll-behavior:smooth}`, so Next writes an inline
    // `scroll-behavior:auto` onto <html> during route transitions and React reports a
    // hydration mismatch. The data attribute marks the smooth scroll as deliberate
    // (Next 16 requires it); suppressHydrationWarning covers the style Next writes.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
