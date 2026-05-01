# Clearfeed.fyi

> Cut the noise. Own your LinkedIn feed.

AEO-optimised affiliate content site built with Next.js 15, MDX, and Tailwind CSS.

---

## Stack

- **Next.js 15** (App Router)
- **MDX** via `next-mdx-remote` — write posts in Markdown with embedded React components
- **Tailwind CSS** — utility styling
- **Vercel** — hosting + auto deploys from GitHub
- **gray-matter** — parses post frontmatter
- **reading-time** — auto-calculates read time

---

## Setup (do this now)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment variables (optional)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_BUTTONDOWN_USERNAME` | Your [Buttondown](https://buttondown.email) username. When set, the home and articles index pages show an email signup form that posts to Buttondown’s free embed API. |

**Welcome email (you enable this in Buttondown, not in code):** after someone confirms their subscription, Buttondown can send one automatic welcome. In the Buttondown dashboard go to **Settings → Subscribing → Welcome email**, paste the subject and body from [`content/newsletter/welcome-email.md`](content/newsletter/welcome-email.md), and save. Docs: [Welcome email | Buttondown](https://docs.buttondown.com/transactional-emails-welcome).

**RSS for new posts:** `https://clearfeed.fyi/feed.xml` — use it if your newsletter host supports “notify when RSS updates” (Buttondown and others often do). The site also advertises this feed in page metadata (`alternates`).

Affiliate links from **CtaBox**, the **article footer CTA**, and the **tools page** automatically get UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) so you can see which page/placement drove clicks in your affiliate dashboards.

---

## Writing a new post

Create a `.mdx` file in `content/posts/`. Use this frontmatter template:

```mdx
---
title: "Your Post Title Here"
description: "One sentence description — this shows in Google/AI previews. Make it answer a specific question."
date: "2025-04-28"
category: "LinkedIn"
featured: false
---

Your content here...
```

### MDX components available in posts

**CtaBox** — renders a green call-to-action box with a button (affiliate URLs get UTM tracking per post slug):

```mdx
<CtaBox href="https://myfeedin.co?atp=clearfeed" cta="Try MyFeedIn free">
  Your persuasive text here. Explain the benefit.
</CtaBox>
```

Optional `footnote` string (shown under the button), e.g. annual vs monthly pricing notes for AICarousels.

The **end-of-article banner** matches the article’s primary tool: `aicarousels-review` promotes AICarousels; all other posts promote MyFeedIn. Prefer **one main CtaBox** in the body so readers are not bombarded with identical boxes.

---

## AEO writing formula (use this for every post)

Every post should:

1. **Target one specific question** someone would ask an AI — put it in the title
2. **Answer it directly in the first paragraph** — don't make the reader scroll
3. **Use H2 headers that are also questions or clear statements** — AI models parse these
4. **Include your affiliate link where it helps** — naturally in the body, one focused **CtaBox**, plus the automatic footer CTA for the article’s primary tool
5. **End with a practical "what to do now" section** — AI models love actionable conclusions

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project → select the repo
3. Vercel auto-detects Next.js — just click Deploy
4. Add your custom domain `clearfeed.fyi` in Vercel project settings → Domains
5. Point your Namecheap DNS to Vercel's nameservers (Vercel will show you the values)

Every push to `main` auto-deploys. New posts go live by adding an MDX file and pushing.

---

## Planned posts (write these next)

1. `how-to-stop-wasting-time-on-linkedin.mdx`
2. `how-to-see-posts-from-specific-people-on-linkedin.mdx`
3. `best-way-to-manage-linkedin-engagement-without-scrolling.mdx`
4. `myfeedin-review.mdx`
5. `linkedin-feed-management-tools-compared.mdx`

---

## Adding new affiliate products

When you add a second product (e.g. Playable.ai):

1. Add it to the `tools` array in `src/app/tools/page.tsx`
2. Create a new post category in the blog
3. Write 2-3 posts targeting problem-aware questions for that product's niche
4. The site scales naturally — one domain, multiple niches

---

## File structure

```
clearfeed/
├── content/
│   └── posts/          ← Your MDX blog posts live here
├── src/
│   ├── app/
│   │   ├── page.tsx    ← Homepage
│   │   ├── blog/       ← Blog index + post pages
│   │   ├── tools/      ← Tools page
│   │   ├── sitemap.ts  ← Auto-generated sitemap
│   │   └── robots.ts   ← Robots.txt
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   └── lib/
│       └── posts.ts    ← Reads and parses MDX files
```
