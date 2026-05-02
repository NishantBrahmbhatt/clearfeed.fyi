import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withAffiliateTracking } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Honest reviews of the best LinkedIn tools for creators who want to grow without wasting time.",
};

const tools = [
  {
    name: "MyFeedIn",
    tagline: "Build custom LinkedIn feeds. Ditch the algorithm.",
    description:
      "MyFeedIn lets you create curated feeds of specific people on LinkedIn. Instead of the algorithm deciding what you see, you choose. Build a feed of industry experts, prospects, or creators you actually want to engage with daily. Free plan available.",
    category: "Feed Management",
    price: "Free + Paid plans",
    affiliate: true,
    href: "https://myfeedin.co?atp=clearfeed",
    utmKey: "myfeedin",
    badge: "We use this",
  },
  {
    name: "AICarousels",
    tagline: "Make LinkedIn carousels in 30 minutes, not 10 hours.",
    description:
      "AICarousels turns any topic, URL, PDF, or YouTube video into a professional LinkedIn carousel using AI. Carousels are the highest-performing content format on LinkedIn — AICarousels makes them fast enough to post consistently. Featured in Forbes as a Must-Try AI Tool for 2025. Free to start, no sign-up required. Annual billing is usually cheaper per month if you commit for the year. Use code NISHANT25 for 25% off any paid plan.",
    category: "Content Creation",
    price: "Free + from $11.21/month with code NISHANT25",
    affiliate: true,
    href: "https://www.aicarousels.com/?via=clearfeed",
    utmKey: "aicarousels",
    badge: "We use this",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="mb-12 fade-up">
          <span
            className="text-xs font-medium tracking-widest text-signal uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tool Reviews
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-ink mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tools we actually use
          </h1>
          <p className="text-ink/60 text-base sm:text-lg max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            No filler. Every tool here has been tested. Some links are
            affiliate links — we only list tools we genuinely recommend. For a
            curated list of free utilities (formatters, previews, carousels,
            and more), see{" "}
            <a
              href="/free-tools"
              className="text-signal underline underline-offset-2 hover:text-signal-dark"
            >
              Free tools
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="border border-mist rounded-lg p-5 sm:p-7 bg-paper hover:border-signal/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h2
                      className="text-xl font-bold text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tool.name}
                    </h2>
                    {tool.badge && (
                      <span
                        className="text-xs bg-signal text-white px-2.5 py-0.5 rounded-full"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tool.badge}
                      </span>
                    )}
                    <span
                      className="text-xs bg-mist text-ink/60 px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tool.category}
                    </span>
                  </div>
                  <p
                    className="text-signal font-medium text-sm mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tool.tagline}
                  </p>
                  <p
                    className="text-ink/70 text-base leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tool.description}
                  </p>
                  <p
                    className="text-xs text-ink/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Pricing: {tool.price}
                    {tool.affiliate && " · Affiliate link"}
                  </p>
                </div>
                <a
                  href={withAffiliateTracking(tool.href, {
                    campaign: `tools-${tool.utmKey}`,
                    placement: "tools-card",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center flex-shrink-0 bg-signal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-signal-dark transition-colors whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Try free →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
