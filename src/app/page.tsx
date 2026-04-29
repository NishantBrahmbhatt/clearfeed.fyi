import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clearfeed.fyi",
  description:
    "Practical guides and tool reviews for LinkedIn creators who want a focused, productive feed. Stop scrolling. Start engaging with what matters.",
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-16">
          <div className="fade-up">
            <span
              className="inline-block text-xs font-medium tracking-widest text-signal uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              LinkedIn Clarity
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight mb-5 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your LinkedIn feed
              <br />
              <span className="text-signal">should work for you.</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-ink/60 max-w-2xl leading-relaxed mb-8 sm:mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Practical guides and honest tool reviews for creators who are
              tired of the algorithm deciding what they see. Take back control.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link
                href="/blog"
                className="bg-signal text-white px-6 py-3 rounded-full font-medium hover:bg-signal-dark transition-colors text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Read the guides →
              </Link>
              <a
                href="https://myfeedin.co?atp=PO9qAX"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-signal text-signal px-6 py-3 rounded-full font-medium hover:bg-signal-light transition-colors text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Try MyFeedIn free
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 sm:mt-16 flex items-center gap-3 sm:gap-4 fade-up fade-up-delay-1">
            <div className="h-px flex-1 bg-mist" />
            <span className="text-xs text-ink/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
              Latest articles
            </span>
            <div className="h-px flex-1 bg-mist" />
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
                Articles coming soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {posts.map((post, i) => (
                <div key={post.slug} className={`fade-up fade-up-delay-${Math.min(i + 1, 3)}`}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}

          {posts.length > 0 && (
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="text-sm text-signal hover:text-signal-dark transition-colors underline underline-offset-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View all articles →
              </Link>
            </div>
          )}
        </section>

        {/* Tool spotlight */}
        <section className="bg-signal-light border-y border-signal/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
            <div className="flex-1">
              <span
                className="text-xs font-medium tracking-widest text-signal uppercase mb-3 block"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Tool we recommend
              </span>
              <h2
                className="text-2xl font-bold text-ink mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                MyFeedIn
              </h2>
              <p className="text-ink/70 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Build custom LinkedIn feeds of the exact people you want to
                follow. No algorithm. No noise. Just the creators and
                connections that actually matter to you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://myfeedin.co?atp=PO9qAX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-signal text-white px-8 py-3 rounded-full font-medium hover:bg-signal-dark transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Try free →
              </a>
              <p className="text-xs text-ink/40 mt-2 text-center" style={{ fontFamily: "var(--font-body)" }}>
                Free plan available
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
