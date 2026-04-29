import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuggetsClient from "@/components/NuggetsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Nuggets",
  description:
    "28 sharp LinkedIn truths backed by real data. Tap any nugget to expand the research behind it.",
};

const nuggets = [
  {
    id: 1,
    category: "Feed & Algorithm",
    nugget:
      "Your LinkedIn feed isn't broken. It's working exactly as designed — just not for you.",
    explanation:
      "LinkedIn's algorithm optimises for time on platform, not for your goals. Every element of the feed — the infinite scroll, the suggested posts, the notification badges — exists to extend your session because longer sessions mean more ad revenue. Understanding this reframes the problem: the feed isn't neutral, it's adversarial to your productivity.",
    source: "Hootsuite",
    href: "https://blog.hootsuite.com/linkedin-algorithm/",
    year: "2025",
  },
  {
    id: 2,
    category: "Feed & Algorithm",
    nugget: "One genuine comment beats a hundred likes. Every time.",
    explanation:
      "Comments carry 15x more algorithmic weight than likes on LinkedIn. A like takes one click and signals almost nothing about engagement quality. A comment — especially one over 15 words — signals that someone read your post carefully enough to respond. LinkedIn's algorithm uses this distinction to decide how widely to distribute your content.",
    source: "Meet Lea",
    href: "https://meet-lea.com/en/blog/linkedin-algorithm-explained",
    year: "2025",
  },
  {
    id: 3,
    category: "Feed & Algorithm",
    nugget:
      "The first 60 minutes after you post decide everything. After that, the algorithm has mostly moved on.",
    explanation:
      "Early comment velocity in the first 60 to 120 minutes is the primary driver of a post's total reach. LinkedIn tests your post on a small slice of your audience first. If that slice engages — especially with comments — the post gets distributed more widely. If it doesn't, it's largely suppressed before most of your followers ever see it.",
    source: "AuthoredUp",
    href: "https://authoredup.com/blog/linkedin-algorithm",
    year: "2025",
  },
  {
    id: 4,
    category: "Feed & Algorithm",
    nugget:
      "LinkedIn doesn't show your post to all your followers. It shows it to a sample. How that sample responds decides if anyone else sees it.",
    explanation:
      "LinkedIn uses a staged distribution model. Your post first reaches a small test audience. The algorithm measures engagement quality — specifically comment velocity and dwell time — within that window. High-performing posts fan out to wider audiences including second and third-degree connections. Low-performing posts stop there.",
    source: "Botdog",
    href: "https://www.botdog.co/blog-posts/linkedin-algorithm-2025",
    year: "2025",
  },
  {
    id: 5,
    category: "Feed & Algorithm",
    nugget:
      "Posting every day with average content is worse than posting three times a week with something worth reading.",
    explanation:
      "Daily posting with mediocre content actively hurts reach. LinkedIn's algorithm penalises accounts that post too frequently with low-engagement results, interpreting the pattern as low-quality or spam-adjacent behaviour. Two to three posts per week with genuine insight consistently outperforms daily noise.",
    source: "DEV Community",
    href: "https://dev.to/synergistdigitalmedia/linkedins-algorithm-in-2025-why-engagement-pods-are-dead-and-what-works-now-1f6h",
    year: "2025",
  },
  {
    id: 6,
    category: "Feed & Algorithm",
    nugget:
      "Put your link in the first comment, not the post. LinkedIn actively suppresses posts with external links.",
    explanation:
      "External links in the post body reduce initial reach by approximately 30% because LinkedIn wants to keep users on the platform. The workaround is to publish the post without a link, let it gather early engagement, then add the URL in the first comment. This is widely known among LinkedIn creators — but most people still get it wrong.",
    source: "Postiv AI",
    href: "https://postiv.ai/blog/linkedin-content-strategy-2025",
    year: "2025",
  },
  {
    id: 7,
    category: "Content & Posting",
    nugget:
      "Carousels get 11 times more interactions than single images on LinkedIn. Most people still post single images.",
    explanation:
      "A Metricool analysis of over 670,000 LinkedIn posts found that carousels achieve 11 times more interactions than individual images, with an engagement rate of 49.52% and an average of over 600 interactions per post. Images are posted six times more often than carousels, which means the gap between what people post and what performs is enormous.",
    source: "Marketing4eCommerce",
    href: "https://marketing4ecommerce.net/en/carousels-dominate-linkedin/",
    year: "2025",
  },
  {
    id: 8,
    category: "Content & Posting",
    nugget: "Your first line is your entire post. Most people never click 'see more'.",
    explanation:
      "LinkedIn truncates posts after two to three lines with a 'see more' button. The opening line is the only part the majority of readers see before deciding whether to expand. A weak opening kills reach before the algorithm even has a chance to test the post. Write the first line as if it were the only line.",
    source: "Louise Brogan",
    href: "https://louisebrogan.com/linkedin-comments/",
    year: "2025",
  },
  {
    id: 9,
    category: "Content & Posting",
    nugget:
      "Posting on LinkedIn is how you keep connections warm without sending a single direct message.",
    explanation:
      "Regular posting keeps you visible to your existing network passively. Decision-makers spend an average of 10 to 14 minutes per LinkedIn session consuming content from their feed. A post from you showing up in that window reminds connections you exist without requiring any direct outreach — it's ambient relationship maintenance.",
    source: "Wave Connect",
    href: "https://wavecnct.com/blogs/linkedin-statistics",
    year: "2025",
  },
  {
    id: 10,
    category: "Content & Posting",
    nugget:
      "Consistent posting grows your follower count up to six times faster than sporadic posting.",
    explanation:
      "Regular posting drives follower growth up to 6x faster, with 2 to 5 posts per week as the data-backed sweet spot. Consistency signals to LinkedIn's algorithm that you're an active contributor, which gives each new post broader initial distribution — creating a compounding effect where every post benefits from the momentum of previous ones.",
    source: "Closely",
    href: "https://blog.closelyhq.com/linkedin-algorithm-2025-post-at-these-exact-times-10x-reach/",
    year: "2025",
  },
  {
    id: 11,
    category: "Content & Posting",
    nugget:
      "A post that gets saved is worth more than a post that gets liked. Saves tell the algorithm your content was actually useful.",
    explanation:
      "Creators whose posts get saved consistently grow their audience 3x faster on average. Saves are the strongest quiet vote content can receive because they indicate the reader found the post worth returning to — a signal of genuine utility rather than passive approval. LinkedIn weights saves heavily in its distribution decisions.",
    source: "AuthoredUp",
    href: "https://authoredup.com/blog/linkedin-algorithm",
    year: "2025",
  },
  {
    id: 12,
    category: "Content & Posting",
    nugget: "Only 1% of LinkedIn users post content every week. Those 1% generate 9 billion impressions.",
    explanation:
      "With over 1 billion LinkedIn members but only a tiny fraction creating content consistently, the competition for feed space is far lower than most people assume. Showing up reliably with genuine insight puts you in a category most professionals never enter — which is why consistent creators grow audiences disproportionately fast relative to their effort.",
    source: "Column Content",
    href: "https://columncontent.com/linkedin-statistics/",
    year: "2025",
  },
  {
    id: 13,
    category: "Content & Posting",
    nugget:
      "Don't post more than once a day. LinkedIn penalises it. Give each post room to breathe.",
    explanation:
      "Posting multiple times within 24 hours causes LinkedIn's algorithm to reduce the reach of your newer post. Each post needs time to gather engagement signals before the next one competes for the same audience's attention. Spacing posts at least 24 hours apart — ideally longer — gives each one the best chance of being fully evaluated by the algorithm.",
    source: "AuthoredUp",
    href: "https://authoredup.com/blog/linkedin-algorithm",
    year: "2025",
  },
  {
    id: 14,
    category: "Profile",
    nugget:
      "A profile without a photo gets 21 times fewer views. It's the single easiest fix on LinkedIn.",
    explanation:
      "LinkedIn's own research confirms that profiles with professional photos receive 21x more profile views and 36x more messages than those without. No other single change delivers this magnitude of improvement. A photo signals credibility and approachability — the two things that make a recruiter or connection request feel safe enough to click.",
    source: "CareerBldr",
    href: "https://careerbldr.com/blog/linkedin-profile-optimization-guide/",
    year: "2025",
  },
  {
    id: 15,
    category: "Profile",
    nugget:
      "Your LinkedIn headline is an SEO title. It's indexed at 5x the weight of most other profile fields. Most people treat it like a job title.",
    explanation:
      "The headline is the single most important field for LinkedIn search visibility, indexed at 5x the weight of other profile sections. When a recruiter or potential connection searches for someone with your skills, your headline is the primary signal LinkedIn uses to match you. A generic job title wastes the most valuable real estate on your entire profile.",
    source: "CareerBldr",
    href: "https://careerbldr.com/blog/linkedin-profile-optimization-guide/",
    year: "2025",
  },
  {
    id: 16,
    category: "Profile",
    nugget: "A complete LinkedIn profile appears in 40 times more searches than an incomplete one.",
    explanation:
      "Profiles completed to All-Star status appear in 40x more searches than incomplete ones. LinkedIn's search algorithm uses profile completeness as a quality signal — an incomplete profile is treated as a lower-quality result regardless of the individual's actual credentials. Filling in every section is one of the highest-leverage actions you can take.",
    source: "Botdog",
    href: "https://www.botdog.co/blog-posts/linkedin-statistics",
    year: "2025",
  },
  {
    id: 17,
    category: "Profile",
    nugget:
      "Instagram is for who you are. LinkedIn is for what you can do. Most people's profiles mix them up.",
    explanation:
      "95% of active recruiters use LinkedIn daily to scout candidates. They're not looking for your personality — they're looking for evidence of capability, results, and relevance. A LinkedIn profile that reads like a personal brand post rather than a professional track record misses the primary audience the platform was built to serve.",
    source: "StraightIn",
    href: "https://straight-in.com/blog/linkedin-recruiter-stats/",
    year: "2025",
  },
  {
    id: 18,
    category: "Profile",
    nugget: "Profiles with 5 or more relevant skills listed get 17 times more profile views.",
    explanation:
      "LinkedIn's algorithm uses your skills section as a relevance signal when matching profiles to searches. Profiles listing at least 5 relevant skills appear dramatically more often in recruiter searches and connection suggestions. The skills section is one of the most neglected parts of most LinkedIn profiles and one of the fastest to improve.",
    source: "Botdog",
    href: "https://www.botdog.co/blog-posts/linkedin-statistics",
    year: "2025",
  },
  {
    id: 19,
    category: "Profile",
    nugget:
      "Headlines using role, specialisation, impact, and credentials get 2.4x more recruiter replies than keyword-only headlines.",
    explanation:
      "An analysis of 1,600 LinkedIn profiles found that headlines using a structured formula — role, specialisation, measurable impact, and a human detail — generated 2.4x more recruiter replies than generic keyword-stuffed alternatives. The structure works because it answers the recruiter's primary questions in a single line without requiring them to read further.",
    source: "LiGo Social",
    href: "https://ligosocial.com/blog/linkedin-headline-examples",
    year: "2025",
  },
  {
    id: 20,
    category: "Growth & Engagement",
    nugget:
      "Replying to your own post's comments boosts total engagement by 30%. Most people post and disappear.",
    explanation:
      "A Buffer analysis of 72,000 posts from 25,000 accounts found that authors who reply to comments on their own posts see a 30% engagement boost, with 83% of accounts showing positive effects. Replies extend the post's dwell time, signal to the algorithm that genuine conversation is happening, and keep the post active during and after the golden hour window.",
    source: "Meet Lea",
    href: "https://meet-lea.com/en/blog/linkedin-comment-strategy-increase-reach",
    year: "2025",
  },
  {
    id: 21,
    category: "Growth & Engagement",
    nugget:
      "A thoughtful comment on someone else's post puts you in front of their entire audience for free. It's the most underused growth tool on LinkedIn.",
    explanation:
      "Strategic commenting on posts from creators with large followings puts your name and perspective in front of their audience at zero cost. People who find your comment interesting click through to your profile — one of the most reliable organic discovery mechanisms on the platform. Most LinkedIn creators focus entirely on their own posts and ignore this entirely.",
    source: "Louise Brogan",
    href: "https://louisebrogan.com/linkedin-comments/",
    year: "2025",
  },
  {
    id: 22,
    category: "Growth & Engagement",
    nugget:
      "Posting weekly leads to a 2x lift in engagement compared to posting sporadically.",
    explanation:
      "LinkedIn's own data shows that posting weekly produces a two-times lift in engagement compared to irregular posting. Consistency builds algorithmic momentum — each post benefits from the credibility established by previous ones, and your audience develops a pattern of expecting and engaging with your content.",
    source: "Hootsuite",
    href: "https://blog.hootsuite.com/linkedin-algorithm/",
    year: "2025",
  },
  {
    id: 23,
    category: "Growth & Engagement",
    nugget:
      "Commenting with fewer than 10 words barely registers. The algorithm weights longer, substantive comments significantly higher.",
    explanation:
      "Comments with 15 or more words carry significantly more algorithmic weight than short phrases. 'Great post!' contributes almost nothing. A two-sentence response that adds a specific point, asks a genuine question, or shares a related experience signals real engagement — both to the algorithm and to the post author whose network you're trying to reach.",
    source: "Meet Lea",
    href: "https://meet-lea.com/en/blog/linkedin-comment-strategy-increase-reach",
    year: "2025",
  },
  {
    id: 24,
    category: "Mindset & Strategy",
    nugget:
      "LinkedIn rewards credibility, not frequency. Three expert posts a week beat seven mediocre ones.",
    explanation:
      "LinkedIn's 2025 algorithm update explicitly shifted from rewarding posting frequency to rewarding topical expertise and credibility. Authority outweighs activity. Posting consistently about one niche causes LinkedIn to identify you as a subject-matter expert and distribute your content more widely — regardless of how often you post.",
    source: "Dragonfly AEC",
    href: "https://www.dragonflyaec.com/post/linkedin-algorithm-update-2025",
    year: "2025",
  },
  {
    id: 25,
    category: "Mindset & Strategy",
    nugget:
      "Your profile is a search engine listing. Most people optimise their CV and ignore their LinkedIn. Those are not the same document.",
    explanation:
      "87% of recruiters globally use LinkedIn as their primary sourcing platform. They search with keywords, filters, and relevance signals — not by reading CVs. A LinkedIn profile optimised for search visibility, with the right headline keywords, complete sections, and relevant skills, behaves like a well-ranked search result. A poorly optimised profile is invisible regardless of how strong the underlying CV is.",
    source: "RKY Careers",
    href: "https://rkycareers.com/blog/turning-your-linkedin-into-a-job-magnet-in-2026/",
    year: "2026",
  },
  {
    id: 26,
    category: "Mindset & Strategy",
    nugget:
      "75% of B2B decision-makers say thought leadership content on LinkedIn directly led them to consider a new vendor.",
    explanation:
      "LinkedIn is one of the few platforms where content directly influences purchasing decisions at scale. Three quarters of B2B decision-makers and C-suite leaders report spending at least one hour per week consuming thought leadership — and the majority say it changed who they considered doing business with. For anyone in B2B, a consistent LinkedIn presence is not a vanity project.",
    source: "Wave Connect",
    href: "https://wavecnct.com/blogs/linkedin-statistics",
    year: "2025",
  },
  {
    id: 27,
    category: "Mindset & Strategy",
    nugget: "7 people are hired through LinkedIn every minute.",
    explanation:
      "LinkedIn's scale as a hiring platform is genuinely enormous. Seven hires per minute means over 10,000 people per day finding their next role through the platform. For job seekers, this makes profile optimisation and consistent visibility not just useful but urgent. For recruiters and hiring managers, it makes LinkedIn the single most cost-effective sourcing channel available.",
    source: "StraightIn",
    href: "https://straight-in.com/blog/linkedin-recruiter-stats/",
    year: "2025",
  },
  {
    id: 28,
    category: "Mindset & Strategy",
    nugget:
      "LinkedIn is not a social network. It's a professional search engine where your activity is your ranking signal.",
    explanation:
      "LinkedIn's algorithm shifted in 2025 from a social graph model — based on who you know — to an interest graph model — based on what you know and engage with. Network size matters less than topical consistency and engagement quality. A niche account with 500 connections posting expert content regularly can outreach a generic account with 10,000 connections that posts inconsistently.",
    source: "Meet Lea",
    href: "https://meet-lea.com/en/blog/linkedin-algorithm-explained",
    year: "2025",
  },
];

const categories = [
  "All",
  "Feed & Algorithm",
  "Content & Posting",
  "Profile",
  "Growth & Engagement",
  "Mindset & Strategy",
];

export default function NuggetsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">
          <div className="mb-12 fade-up">
            <span
              className="text-xs font-medium tracking-widest text-signal uppercase mb-4 block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              LinkedIn Nuggets
            </span>
            <h1
              className="text-4xl font-bold text-ink mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              28 LinkedIn truths.
              <br />
              <span className="text-signal">Each one backed by data.</span>
            </h1>
            <p
              className="text-ink/60 text-lg max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tap any nugget to see the research behind it.
            </p>
          </div>

          <NuggetsClient nuggets={nuggets} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  );
}
