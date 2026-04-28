import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clearfeed.fyi — Cut the noise. Own your LinkedIn feed.",
    template: "%s | Clearfeed.fyi",
  },
  description:
    "Practical guides, tool reviews, and strategies for LinkedIn creators who want a focused, productive feed. No fluff.",
  metadataBase: new URL("https://clearfeed.fyi"),
  openGraph: {
    siteName: "Clearfeed.fyi",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
