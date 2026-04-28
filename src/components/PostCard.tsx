import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-mist bg-paper hover:border-signal/40 hover:bg-signal-light/20 transition-all duration-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-medium text-signal bg-signal-light px-2.5 py-1 rounded-full"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {post.category}
          </span>
          <span className="text-xs text-ink/40" style={{ fontFamily: "var(--font-body)" }}>
            {post.readingTime}
          </span>
        </div>

        <h2
          className="text-xl font-semibold text-ink mb-2 group-hover:text-signal transition-colors leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h2>

        <p className="text-sm text-ink/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {post.description}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm text-signal font-medium" style={{ fontFamily: "var(--font-body)" }}>
          Read article
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
