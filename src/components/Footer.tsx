import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-mist mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-semibold text-ink mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              clearfeed<span className="text-signal">.fyi</span>
            </p>
            <p className="text-sm text-ink/50" style={{ fontFamily: "var(--font-body)" }}>
              Cut the noise. Own your LinkedIn feed.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-ink/60" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/blog" className="hover:text-ink transition-colors">Articles</Link>
            <Link href="/tools" className="hover:text-ink transition-colors">Tools</Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-mist flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-xs text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Clearfeed.fyi. Some links on this site are affiliate links.
          </p>
          <p className="text-xs text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
            We only recommend tools we actually use.
          </p>
        </div>
      </div>
    </footer>
  );
}
