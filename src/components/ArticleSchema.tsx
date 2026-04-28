interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  url: string;
  faqs?: FAQItem[];
}

export default function ArticleSchema({
  title,
  description,
  date,
  url,
  faqs,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "Clearfeed.fyi",
      url: "https://clearfeed.fyi",
    },
    publisher: {
      "@type": "Organization",
      name: "Clearfeed.fyi",
      url: "https://clearfeed.fyi",
      logo: {
        "@type": "ImageObject",
        url: "https://clearfeed.fyi/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
