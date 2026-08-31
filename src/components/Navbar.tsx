"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubIcon, PursuitMark } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
] as const;

const hoverFine = "[@media(hover:hover)_and_(pointer:fine)]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    let frame = 0;
    const threshold = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-scroll-threshold")
        .trim();
      const next = Number.parseFloat(raw);
      return Number.isFinite(next) ? next : 48;
    };

    const updateScrolled = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > threshold()));
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 h-(--header-height)",
        "max-compact:h-(--header-height-compact)",
      )}
    >
      <div
        className={cn(
          "mx-auto h-full w-full origin-top border-b border-border",
          "bg-(image:--surface-header) backdrop-blur-(--navbar-blur)",
          "transition-[width,transform,border-radius,box-shadow] duration-(--dur) ease-out",
          scrolled &&
            "w-(--navbar-scrolled-width) translate-y-(--navbar-scrolled-y) rounded-md shadow-(--shadow-panel)",
          "motion-reduce:w-full motion-reduce:translate-y-0 motion-reduce:rounded-none motion-reduce:shadow-none",
        )}
      >
        <div
          className={cn(
            "wrap flex h-full items-center justify-between gap-(--navbar-inner-gap)",
            "max-narrow:gap-(--navbar-inner-gap-narrow)",
          )}
        >
          <Link
            href="/"
            onClick={close}
            aria-label="Nikhil's Pursuit — home"
            className={cn(
              "group flex min-w-(--navbar-brand-min) items-center gap-(--navbar-brand-gap)",
              "max-narrow:min-w-0 max-compact:min-w-0 max-compact:gap-(--navbar-brand-gap-compact)",
              `${hoverFine}:hover:text-(--text)`,
            )}
          >
            <PursuitMark />
            <span
              className={cn(
                "whitespace-nowrap font-sans text-(length:--navbar-brand-size) font-semibold tracking-[-0.02em]",
                "max-compact:text-(length:--navbar-brand-size-compact)",
              )}
            >
              Nikhil&rsquo;s Pursuit
            </span>
          </Link>
          <nav
            id="nav"
            aria-label="Primary"
            className={cn(
              "flex gap-(--navbar-inner-gap) font-mono text-(length:--navbar-link-size) font-medium tracking-[0.01em] normal-case",
              "max-narrow:gap-(--navbar-inner-gap-narrow)",
              !open && "max-compact:hidden",
              open &&
                "max-compact:absolute max-compact:inset-x-0 max-compact:top-(--navbar-menu-offset) max-compact:flex max-compact:flex-col max-compact:gap-0 max-compact:border-b max-compact:border-border max-compact:bg-(image:--surface-header)",
            )}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  open &&
                    "max-compact:border-t max-compact:border-border max-compact:px-4 max-compact:py-(--navbar-menu-link-y)",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div
            className={cn(
              "flex min-w-(--navbar-brand-min) items-center justify-end gap-(--navbar-actions-gap)",
              "max-narrow:min-w-0",
            )}
          >
            <Button
              variant="quiet"
              size="sm"
              asChild
              className={cn(
                "h-auto gap-2 rounded-sm",
                "px-(--navbar-cta-px) py-(--navbar-cta-py)",
                "text-(length:--navbar-link-size) tracking-[0.01em] normal-case",
                `${hoverFine}:hover:bg-(--surface-3)`,
                `${hoverFine}:hover:!text-(--text)`,
                "max-compact:px-(--navbar-cta-px-compact) max-compact:py-(--navbar-cta-py-compact)",
              )}
            >
              <Link
                href="https://github.com/Nikhil-Kadapala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={16} />
                <span className="max-compact:hidden">GitHub</span>
                <span className="text-(--accent) max-compact:hidden" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "hidden h-auto px-0",
                "text-(length:--navbar-link-size) tracking-[0.01em] normal-case",
                "max-compact:inline-flex",
              )}
              aria-expanded={open}
              aria-controls="nav"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close" : "Menu"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
