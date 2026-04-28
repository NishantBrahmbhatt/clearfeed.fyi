import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-mist bg-paper sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-signal rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span
            className="text-xl font-semibold text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            clearfeed<span className="text-signal">.fyi</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
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
    </header>
  );
}
