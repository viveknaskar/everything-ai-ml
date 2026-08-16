import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Canonical, SEO-primary origin. The same static build is also published to
// GitHub Pages, so every metadata URL below is hardcoded absolute (rather
// than resolved via basePath) to make sure both deployments point search
// engines and social scrapers at this one canonical copy.
const SITE_URL = "https://everythingaiml.thedeveloperstory.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Everything AI/ML – Curated Learning Resources",
  description:
    "A curated cheatsheet of learning resources for Generative AI, Machine Learning, Agentic AI, Prompt Engineering, RAG, Fine-tuning, and more.",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: `${basePath}/logo.png`,
  },
  openGraph: {
    title: "Everything AI/ML",
    description: "Curated AI & ML learning resources — all in one place.",
    url: SITE_URL,
    siteName: "Everything AI/ML",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Everything AI/ML" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything AI/ML",
    description: "Curated AI & ML learning resources — all in one place.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
