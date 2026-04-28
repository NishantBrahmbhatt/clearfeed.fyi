import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    href: "https://myfeedin.co?atp=PO9qAX",
    badge: "We use this",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="mb-12 fade-up">
          <span
            className="text-xs font-medium tracking-widest text-signal uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tool Reviews
          </span>
          <h1
            className="text-4xl font-bold text-ink mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tools we actually use
          </h1>
          <p className="text-ink/60 text-lg max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            No filler. Every tool here has been tested. Some links are
            affiliate links — we only list tools we genuinely recommend.
          </p>
        </div>

        <div className="space-y-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="border border-mist rounded-lg p-7 bg-paper hover:border-signal/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
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
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-signal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-signal-dark transition-colors whitespace-nowrap"
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
