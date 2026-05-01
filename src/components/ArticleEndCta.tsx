import { AFFILIATE_URLS, primaryAffiliateForSlug, withAffiliateTracking } from "@/lib/affiliate";

type ArticleEndCtaProps = {
  slug: string;
};

export default function ArticleEndCta({ slug }: ArticleEndCtaProps) {
  const tool = primaryAffiliateForSlug(slug);

  if (tool === "aicarousels") {
    const href = withAffiliateTracking(AFFILIATE_URLS.aicarousels, {
      campaign: slug,
      placement: "article-footer",
    });
    return (
      <div className="bg-signal-light border-y border-signal/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <h3
            className="text-2xl font-bold text-ink mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to post carousels without the grind?
          </h3>
          <p
            className="text-ink/60 mb-6 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            AICarousels is the fastest way we have found to turn ideas into
            LinkedIn carousels. Free to try in the browser.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-signal text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-signal-dark transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Try AICarousels free →
          </a>
        </div>
      </div>
    );
  }

  const href = withAffiliateTracking(AFFILIATE_URLS.myfeedin, {
    campaign: slug,
    placement: "article-footer",
  });

  return (
    <div className="bg-signal-light border-y border-signal/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
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
          MyFeedIn lets you build custom LinkedIn feeds of exactly the people
          you want to follow. Free to start.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-signal text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-signal-dark transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Try MyFeedIn free →
        </a>
      </div>
    </div>
  );
}
