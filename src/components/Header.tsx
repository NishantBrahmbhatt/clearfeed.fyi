 "use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-mist bg-paper sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-signal rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span
            className="text-lg sm:text-xl font-semibold text-ink whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            clearfeed<span className="text-signal">.fyi</span>
          </span>
        </Link>

        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-mist px-3 py-2 text-sm text-ink/80"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-ink/70 hover:text-ink transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Articles
          </Link>
          <Link
            href="/tools"
            className="text-sm text-ink/70 hover:text-ink transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tools
          </Link>
          <a
            href="https://myfeedin.co?atp=PO9qAX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-signal text-white px-4 py-1.5 rounded-full hover:bg-signal-dark transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Try MyFeedIn →
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-mist px-4 py-3">
          <nav className="flex flex-col gap-2">
            <Link
              href="/blog"
              className="text-sm text-ink/80 hover:text-ink transition-colors py-2"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => setMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/tools"
              className="text-sm text-ink/80 hover:text-ink transition-colors py-2"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => setMenuOpen(false)}
            >
              Tools
            </Link>
            <a
              href="https://myfeedin.co?atp=PO9qAX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-signal text-white px-4 py-2 rounded-full hover:bg-signal-dark transition-colors text-center mt-1"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => setMenuOpen(false)}
            >
              Try MyFeedIn →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
