import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  // Custom CTA box — use in MDX as <CtaBox>
  CtaBox: ({
    children,
    href,
    cta,
  }: {
    children: React.ReactNode;
    href: string;
    cta: string;
  }) => (
    <div className="cta-box not-prose">
      <p
        className="text-ink/80 text-base mb-4 leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-signal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-signal-dark transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {cta} →
      </a>
    </div>
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Post header */}
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-8">
          <div className="flex items-center gap-3 mb-6 fade-up">
            <span
              className="text-xs font-medium text-signal bg-signal-light px-2.5 py-1 rounded-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {post.category}
            </span>
            <span className="text-xs text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
              {post.readingTime}
            </span>
            <span className="text-xs text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6 fade-up fade-up-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          <p
            className="text-xl text-ink/60 leading-relaxed fade-up fade-up-delay-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {post.description}
          </p>

          <div className="mt-8 h-px bg-mist" />
        </div>

        {/* Post content */}
        <article className="max-w-3xl mx-auto px-6 pb-20 prose">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {/* Bottom CTA */}
        <div className="bg-signal-light border-y border-signal/20">
          <div className="max-w-3xl mx-auto px-6 py-12 text-center">
            <h3
              className="text-2xl font-bold text-ink mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to take control of your feed?
            </h3>
            <p
              className="text-ink/60 mb-6 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              MyFeedIn lets you build custom LinkedIn feeds of exactly the
              people you want to follow. Free to start.
            </p>
            <a
              href="https://myfeedin.co?atp=PO9qAX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-signal text-white px-8 py-3 rounded-full font-medium hover:bg-signal-dark transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Try MyFeedIn free →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
