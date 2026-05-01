/**
 * Append UTM parameters for funnel tracking in affiliate dashboards.
 * Preserves existing query keys (e.g. atp=, via=).
 */
export type AffiliatePlacement =
  | "mdx-cta"
  | "article-footer"
  | "tools-card"
  | "inline-body"
  | "free-tools";

export function withAffiliateTracking(
  href: string,
  opts: { campaign: string; placement: AffiliatePlacement }
): string {
  try {
    const u = new URL(href);
    const host = u.hostname.replace(/^www\./, "");
    const isTrackedAffiliate =
      host === "myfeedin.co" ||
      host === "aicarousels.com" ||
      host.endsWith(".aicarousels.com");

    if (!isTrackedAffiliate) return href;

    u.searchParams.set("utm_source", "clearfeed.fyi");
    u.searchParams.set("utm_medium", "affiliate");
    u.searchParams.set("utm_campaign", opts.campaign);
    u.searchParams.set("utm_content", opts.placement);
    return u.toString();
  } catch {
    return href;
  }
}

export function primaryAffiliateForSlug(slug: string): "myfeedin" | "aicarousels" {
  if (slug === "aicarousels-review") return "aicarousels";
  return "myfeedin";
}

export const AFFILIATE_URLS = {
  myfeedin: "https://myfeedin.co?atp=clearfeed",
  aicarousels: "https://www.aicarousels.com/?via=clearfeed",
} as const;
