"use client";

import { useEffect, useId, useState } from "react";
import type { ArticleHeading } from "@/lib/article-headings";
import { cn } from "@/lib/utils";

const RING_R = 17;
const RING_C = 2 * Math.PI * RING_R;

export function ArticleToc({ headings }: { headings: ArticleHeading[] }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");
  const titleId = useId();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight || 1;
      setProgress(Math.min(1, Math.max(0, scrolled / height)));

      let next = headings[0]?.id ?? "";
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top - 140 <= 0) {
          next = heading.id;
        }
      }
      setActiveId(next);
    };

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [headings]);

  return (
    <aside className="toc-rail">
      <div className="progress-ring" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <circle className="ring-track" cx="20" cy="20" r={RING_R} />
          <circle
            className="ring-fill"
            cx="20"
            cy="20"
            r={RING_R}
            style={{ strokeDasharray: RING_C, strokeDashoffset: RING_C * (1 - progress) }}
          />
        </svg>
        <span className="ring-pct">{Math.round(progress * 100)}%</span>
      </div>
      {headings.length > 0 ? (
        <nav aria-labelledby={titleId}>
          <div className="toc-label" id={titleId}>
            On this page
          </div>
          <ul className="toc-list">
            {headings.map((heading) => (
              <li key={heading.id} className={cn(heading.depth === 3 && "sub")}>
                <a href={`#${heading.id}`} className={cn(heading.id === activeId && "active")}>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </aside>
  );
}
