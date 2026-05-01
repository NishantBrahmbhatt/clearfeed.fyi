import { withAffiliateTracking } from "@/lib/affiliate";

type MdxCtaBoxProps = {
  children: React.ReactNode;
  href: string;
  cta: string;
  /** Current blog post slug — used in utm_campaign */
  contentSlug: string;
  /** Optional short line under the button (e.g. annual pricing note) */
  footnote?: string;
};

export default function MdxCtaBox({
  children,
  href,
  cta,
  contentSlug,
  footnote,
}: MdxCtaBoxProps) {
  const trackedHref = withAffiliateTracking(href, {
    campaign: contentSlug,
    placement: "mdx-cta",
  });

  return (
    <div className="cta-box not-prose">
      <p
        className="text-ink/80 text-base mb-4 leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </p>
      <a
        href={trackedHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-signal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-signal-dark transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {cta} →
      </a>
      {footnote ? (
        <p
          className="mt-3 text-xs text-ink/50 leading-relaxed max-w-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {footnote}
        </p>
      ) : null}
    </div>
  );
}
