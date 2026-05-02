/**
 * Subscribe form for Buttondown (https://buttondown.com).
 * Uses NEXT_PUBLIC_BUTTONDOWN_USERNAME when set; otherwise defaults to this site's list.
 */
const DEFAULT_BUTTONDOWN_USERNAME = "nishbo4";

export default function NewsletterSignup() {
  const username =
    process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME?.trim() ||
    DEFAULT_BUTTONDOWN_USERNAME;

  const action = `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(username)}`;
  const referUrl = `https://buttondown.com/refer/${encodeURIComponent(username)}`;

  return (
    <section
      className="border border-mist rounded-xl p-6 sm:p-8 bg-paper not-prose"
      aria-labelledby="newsletter-heading"
    >
      <h2
        id="newsletter-heading"
        className="text-lg sm:text-xl font-bold text-ink mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Get new LinkedIn guides by email
      </h2>
      <p
        className="text-sm text-ink/60 mb-5 max-w-xl leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Low volume: we only email when there is something worth your time. No
        spam. Unsubscribe any time. After you confirm your email, you will get
        one short welcome note with a few links to get started.
      </p>
      <form
        action={action}
        method="post"
        className="embeddable-buttondown-form flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="bd-email" className="sr-only">
            Enter your email
          </label>
          <input
            id="bd-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="flex-1 min-w-0 rounded-full border border-mist bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-signal/40 focus:border-signal"
            style={{ fontFamily: "var(--font-body)" }}
          />
          <button
            type="submit"
            className="shrink-0 bg-signal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-signal-dark transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-ink/45 m-0" style={{ fontFamily: "var(--font-body)" }}>
          <a
            href={referUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-ink/70"
          >
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </section>
  );
}
