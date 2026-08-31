import Link from "next/link";

const LINKS = [
  { href: "https://github.com/Nikhil-Kadapala", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nikhil-kadapala", label: "LinkedIn" },
  { href: "https://x.com/Nikhil_Kadapala", label: "X" },
  { href: "/rss.xml", label: "RSS" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-(--border) py-(--footer-y)">
      <div className="wrap flex flex-wrap justify-between gap-5">
        <span className="mono muted">Nikhil Kadapala · 2026</span>
        <div className="[&_a]:ml-(--footer-link-gap) [&_a]:font-mono [&_a]:text-(length:--footer-link-size) [&_a]:font-medium [&_a]:uppercase [&_a]:tracking-wider [&_a]:text-(--text-muted) max-compact:[&_a]:ml-0 max-compact:[&_a]:mr-(--footer-link-gap-compact)">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
