import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withAffiliateTracking, AFFILIATE_URLS } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LinkedIn tools",
  description:
    "A short, curated list of free LinkedIn utilities that cover most real workflows: drafts, previews, carousels, profile copy, timing, and analytics.",
};

type Tool = {
  name: string;
  description: string;
  /** Full URL; MyFeedIn / AICarousels links get UTM params at render time */
  href: string;
};

type Section = { title: string; intro?: string; tools: Tool[] };

function tracked(href: string): string {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    if (host === "myfeedin.co" || host === "aicarousels.com") {
      return withAffiliateTracking(href, {
        campaign: "free-tools-page",
        placement: "free-tools",
      });
    }
  } catch {
    /* ignore */
  }
  return href;
}

const sections: Section[] = [
  {
    title: "Feed control (the 20% that changes everything)",
    intro:
      "Most free utilities only help after you are already drowning in the feed. Fixing what you see comes first.",
    tools: [
      {
        name: "MyFeedIn (extension + free plan)",
        description:
          "Custom feeds of specific people, focus mode, and engagement without living in the algorithm feed.",
        href: AFFILIATE_URLS.myfeedin,
      },
    ],
  },
  {
    title: "Drafts, hooks, and ideas",
    tools: [
      {
        name: "MyFeedIn — Hook generator",
        description:
          "Opening lines designed to earn the “see more” click on crowded feeds.",
        href: "https://myfeedin.co/free-tools/linkedin-hook-generator?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Post idea generator",
        description:
          "Ten angles with hooks tailored to a niche so you are never staring at a blank page.",
        href: "https://myfeedin.co/free-tools/linkedin-post-idea-generator?atp=clearfeed",
      },
      {
        name: "AICarousels — LinkedIn post generator",
        description:
          "Turn a topic or outline into a full post draft when you want speed over a blank doc.",
        href: "https://www.aicarousels.com/free-tools/linkedin-free-post-generator?via=clearfeed",
      },
      {
        name: "MyFeedIn — Post booster",
        description:
          "Rewrite weak posts with a stronger hook, structure, and CTA while keeping your voice.",
        href: "https://myfeedin.co/free-tools/linkedin-post-booster?atp=clearfeed",
      },
    ],
  },
  {
    title: "Polish before you publish",
    intro:
      "Several sites offer formatters and previews. These cover layout, feed appearance, and field limits without bouncing between five tabs.",
    tools: [
      {
        name: "MyFeedIn — Post preview",
        description:
          "See truncation, line breaks, and “see more” behaviour before you ship.",
        href: "https://myfeedin.co/free-tools/linkedin-post-preview?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Post formatter",
        description:
          "Bold, italics, bullets, and spacing that survive LinkedIn’s editor quirks.",
        href: "https://myfeedin.co/free-tools/linkedin-post-formatter?atp=clearfeed",
      },
      {
        name: "ContentIn — Character counter",
        description:
          "Live counts for posts, headlines, and About text with guardrails for each field.",
        href: "https://contentin.io/linkedin-character-counter/",
      },
    ],
  },
  {
    title: "Carousels, visuals, and banners",
    tools: [
      {
        name: "ContentIn — Carousel generator",
        description:
          "AI-assisted carousel layouts when you want slides without opening a design suite.",
        href: "https://contentin.io/linkedin-carousel-generator/",
      },
      {
        name: "AICarousels — Quote card generator",
        description:
          "Turn a single line into a branded image card for feed stops.",
        href: "https://www.aicarousels.com/free-tools/linkedin-free-quote-card-generator?via=clearfeed",
      },
      {
        name: "AICarousels — Banner maker",
        description:
          "Cover-image sizing and templates tuned for LinkedIn’s crop rules.",
        href: "https://www.aicarousels.com/free-tools/linkedin-banner-maker-free?via=clearfeed",
      },
      {
        name: "AICarousels — Cheat sheet / infographic generator",
        description:
          "Turn a topic into a skimmable multi-slide asset you can export as a PDF carousel.",
        href: "https://www.aicarousels.com/free-tools/linkedin-cheat-sheet-infographic-generator?via=clearfeed",
      },
    ],
  },
  {
    title: "Profile copy (headline, About, and honest feedback)",
    tools: [
      {
        name: "MyFeedIn — Headline generator",
        description:
          "Multiple headline variants tuned for search and skim-reading.",
        href: "https://myfeedin.co/free-tools/linkedin-headline-generator?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Summary generator",
        description:
          "Structured About section drafts you can edit down to something credible.",
        href: "https://myfeedin.co/free-tools/linkedin-summary-generator?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Profile optimizer",
        description:
          "Actionable suggestions for headline and About, not just a prettier template.",
        href: "https://myfeedin.co/free-tools/linkedin-profile-optimizer?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Profile roaster",
        description:
          "Brutal, funny feedback when you need an outside perspective on weak positioning.",
        href: "https://myfeedin.co/free-tools/linkedin-profile-roaster?atp=clearfeed",
      },
    ],
  },
  {
    title: "Timing, analytics, and planning",
    tools: [
      {
        name: "AuthoredUp — Best times to post",
        description:
          "Windows that match when your audience is actually online instead of guessing.",
        href: "https://authoredup.com/tools/linkedin-best-times-to-post",
      },
      {
        name: "AuthoredUp — Engagement rate calculator",
        description:
          "Benchmark views, reactions, and comments against typical ranges.",
        href: "https://authoredup.com/tools/linkedin-engagement-rate-calculator",
      },
      {
        name: "AuthoredUp — Weekly content mix planner",
        description:
          "Match posting formats to goals and the time you realistically have.",
        href: "https://authoredup.com/tools/linkedin-weekly-content-mix-planner",
      },
      {
        name: "ContentIn — Post optimizer",
        description:
          "Structured feedback on a pasted post when you want a checklist, not vibes.",
        href: "https://contentin.io/optimize-linkedin-post/",
      },
      {
        name: "ContentIn — Hashtag research",
        description:
          "Surface reach and engagement signals before you stack thirty tags.",
        href: "https://contentin.io/linkedin-hashtag-research-tool/",
      },
      {
        name: "ContentIn — Content strategy designer",
        description:
          "Audience-aware prompts when you need a simple plan, not another Notion template.",
        href: "https://contentin.io/linkedin-content-strategy/",
      },
    ],
  },
  {
    title: "Download and quick utilities",
    tools: [
      {
        name: "MyFeedIn — Video downloader",
        description:
          "Save a public LinkedIn native video when you have permission to reuse it.",
        href: "https://myfeedin.co/free-tools/linkedin-video-downloader?atp=clearfeed",
      },
      {
        name: "MyFeedIn — Post beautifier",
        description:
          "Turn a finished post into a polished image card for other channels.",
        href: "https://myfeedin.co/free-tools/linkedin-post-beautifier?atp=clearfeed",
      },
    ],
  },
];

export default function FreeToolsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="mb-10 sm:mb-12 fade-up">
          <span
            className="text-xs font-medium tracking-widest text-signal uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Curated list
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-ink mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Free LinkedIn tools worth bookmarking
          </h1>
          <p
            className="text-ink/65 text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Dozens of sites list the same utilities. This page is the opposite of
            an aggregator: a tight set that covers most real workflows (roughly
            the 20% of tools people actually reuse). MyFeedIn and AICarousels
            links support Clearfeed when you use our parameters; other links are
            independent recommendations.
          </p>
        </div>

        <div
          className="mb-10 p-4 sm:p-5 rounded-lg border border-mist bg-paper text-sm text-ink/70 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <strong className="text-ink">Why not list everything?</strong> Many
          entries are duplicates (multiple formatters, previews, headline
          generators). Listing them all trains readers to bounce between tabs
          without a point of view. When you need another variant, start from the
          vendor&apos;s own directory:{" "}
          <a
            href={tracked("https://myfeedin.co/free-tools?atp=clearfeed")}
            className="text-signal underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyFeedIn free tools
          </a>
          ,{" "}
          <a
            href={tracked(
              "https://www.aicarousels.com/free-tools/linkedin-free-tools?via=clearfeed"
            )}
            className="text-signal underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            AICarousels LinkedIn tools
          </a>
          ,{" "}
          <a
            href="https://contentin.io/"
            className="text-signal underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            ContentIn
          </a>
          , or{" "}
          <a
            href="https://authoredup.com/tools/"
            className="text-signal underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            AuthoredUp tools
          </a>
          .
        </div>

        <div className="space-y-12 sm:space-y-14">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className="text-xl sm:text-2xl font-bold text-ink mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              {section.intro ? (
                <p
                  className="text-ink/60 text-sm sm:text-base mb-5 max-w-2xl leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {section.intro}
                </p>
              ) : null}
              <ul className="space-y-4">
                {section.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border border-mist rounded-lg p-4 sm:p-5 bg-paper"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="min-w-0">
                        <h3
                          className="font-semibold text-ink text-base"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {tool.name}
                        </h3>
                        <p
                          className="text-sm text-ink/65 mt-1.5 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {tool.description}
                        </p>
                      </div>
                      <a
                        href={tracked(tool.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center bg-signal text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-signal-dark transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Open tool
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p
          className="mt-12 text-sm text-ink/50 max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          For a longer write-up of how we think about free tools (and traps like
          fake “free” tiers), see{" "}
          <a
            href="/blog/best-free-linkedin-tools"
            className="text-signal underline underline-offset-2"
          >
            Best free LinkedIn tools (2025)
          </a>
          . Prefer reviews over raw lists? Start on{" "}
          <a
            href="/tools"
            className="text-signal underline underline-offset-2"
          >
            Tools we use
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
