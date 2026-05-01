# Welcome email (Buttondown)

Paste the **subject** and **body** below into Buttondown: **Settings**, then **Subscribing**, then **Welcome email** (or your host’s equivalent). The welcome sends **after the subscriber confirms** their address.

Official docs: [Welcome email (Buttondown)](https://docs.buttondown.com/transactional-emails-welcome)

Update the “three guides” links when you publish stronger cornerstone posts.

---

## Suggested subject line

You’re in: a LinkedIn nugget + 3 guides to start

---

## Suggested body (plain / Markdown)

Paste into Buttondown as Markdown. Use **`https://clearfeed.fyi`** (no `www`) so links match your site and avoid odd redirects.

Hi, thanks for subscribing to Clearfeed.fyi.

**What this is**  
Short guides and honest notes for people who use LinkedIn for work but want less algorithm noise and clearer habits. We also collect bite-sized truths backed by sources, not hot takes.

**The nugget**  
*Feed & algorithm*

> Your LinkedIn feed isn’t broken. It’s working exactly as designed, just not for you.

We keep 28 of these on the site. Tap any one to expand the research behind it:  
[Nuggets](https://clearfeed.fyi/nuggets)

**Where to start**

1. [Why your feed shows people you don’t follow](https://clearfeed.fyi/blog/why-linkedin-feed-shows-people-you-dont-follow)  
2. [How to stop wasting time on LinkedIn](https://clearfeed.fyi/blog/how-to-stop-wasting-time-on-linkedin)  
3. [The best way to manage LinkedIn engagement without scrolling](https://clearfeed.fyi/blog/best-way-to-manage-linkedin-engagement-without-scrolling)

[Browse all articles](https://clearfeed.fyi/blog)

**Tools**  
We sometimes link to products we actually use; it’s always disclosed. No pressure: the guides are useful on their own.

**Inbox tip**  
If this landed in Promotions or Spam, moving it to your primary inbox helps the next issue find you.

Questions or a LinkedIn pet peeve you want covered? Just reply. I read everything.

Clearfeed.fyi

---

## Notes

- **Emojis:** Optional. Zero is fine for a serious tone. If you use them, use **one** in the welcome (e.g. after “Hi”) so it does not look like social copy pasted into email.
- **Logo at the top:** The **newsletter icon** in Buttondown is the small masthead mark. For the **full wordmark** (green circle + arrow + `clearfeed` + green `.fyi`, like the site header), use **`public/clearfeed-wordmark-email.png`**. After deploy: `https://clearfeed.fyi/clearfeed-wordmark-email.png`. In **Email design → Header**, upload that PNG or use `![Clearfeed.fyi](https://clearfeed.fyi/clearfeed-wordmark-email.png)` (no `www`). Regenerate: `npm run export:wordmark` (source: `public/clearfeed-wordmark.svg`). Use **PNG** in email, not SVG.
- **Hierarchy:** Use **short section labels** (`What this is`, `The nugget`, …) and put the quote itself in a **blockquote** (`>`) so it reads as a pull-quote, not a second “heading.” Keep the category line *italic* under “The nugget” so it doesn’t fight the bold labels.
- **One nugget** in the welcome is enough; three reads like a wall of text before someone knows you.
- **True random nuggets per subscriber** need automation outside a static welcome; rotating the quoted nugget every few months is totally fine.
- **Feedback surveys** (like WorkAdventure at 30 days) are optional. For a young list, a single line *“reply with what’s broken on LinkedIn for you”* often gets better signal than a form.
- For **broadcast emails** when you publish: use your RSS feed (`https://clearfeed.fyi/feed.xml`) if your host supports “send when feed updates,” then add a fresh nugget by hand at the top when you have time.
