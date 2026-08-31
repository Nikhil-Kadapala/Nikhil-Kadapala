"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubIcon, PursuitMark } from "@/components/icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    let frame = 0;
    const updateScrolled = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 48));
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="site-header-shell">
        <div className="header-inner wrap">
        <Link
          href="/"
          className="brand"
          onClick={close}
          aria-label="Nikhil's Pursuit — home"
        >
          <PursuitMark />
          <span>Nikhil&rsquo;s Pursuit</span>
        </Link>
        <nav
          id="nav"
          className={cn("nav", open && "open")}
          aria-label="Primary"
        >
          <Link href="/about" onClick={close}>
            About
          </Link>
          <Link href="/writing" onClick={close}>
            Writing
          </Link>
          <Link href="/research" onClick={close}>
            Research
          </Link>
          <Link href="/projects" onClick={close}>
            Projects
          </Link>
        </nav>
        <div className="header-actions">
          <Link
            href="https://github.com/Nikhil-Kadapala"
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={16} />
            <span className="header-cta-label">GitHub</span>
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </Link>
          <button
            className="menu"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}
