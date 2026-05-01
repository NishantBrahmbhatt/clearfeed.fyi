import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Guides, tool reviews, and strategies for taking control of your LinkedIn feed and growing without the noise.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="mb-12 fade-up">
          <span
            className="text-xs font-medium tracking-widest text-signal uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            All Articles
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-ink mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Guides & Reviews
          </h1>
          <p className="text-ink/60 text-base sm:text-lg" style={{ fontFamily: "var(--font-body)" }}>
            Everything we know about making LinkedIn work for you.
          </p>
        </div>

        <div className="mb-12 max-w-xl">
          <NewsletterSignup />
        </div>

        {posts.length === 0 ? (
          <p className="text-ink/40 text-center py-20" style={{ fontFamily: "var(--font-body)" }}>
            Articles coming soon.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
