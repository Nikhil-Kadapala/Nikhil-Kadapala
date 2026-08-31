/**
 * Brand mark for "Nikhil's Pursuit" — an italic `N` whose diagonal is a
 * traversal edge running between two nodes, weighted so the path is the
 * heaviest element in the mark.
 *
 * The oblique is 12° taken about the vertical centre (y=12), so the lean is
 * balanced instead of pivoting off the baseline and throwing the mark right.
 * Coordinates are pre-skewed (x' = x - (y - 12) * tan12°) rather than wrapped
 * in a `skewX` transform: skewing the group would drag the two end nodes into
 * ellipses, which reads as sloppy at small sizes. Circles stay circles.
 */
export function PursuitMark({ size = 22 }: { size?: number }) {
  return (
    <svg className="block shrink-0 text-current" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path className="opacity-70 transition-opacity duration-(--dur) ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100" d="M4.41 19.5L7.38 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path className="opacity-70 transition-opacity duration-(--dur) ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100" d="M16.62 18.5L19.38 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7.38 5.5L16.62 18.5" stroke="var(--accent)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="7.38" cy="5.5" r="2.4" fill="var(--bg)" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.62" cy="18.5" r="2.4" fill="var(--bg)" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** GitHub mark (Octicons `mark-github-16`). Inherits color via `currentColor`. */
export function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}
