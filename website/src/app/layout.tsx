import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Everything AI/ML – Curated Learning Resources",
  description:
    "A curated cheatsheet of learning resources for Generative AI, Machine Learning, Agentic AI, Prompt Engineering, RAG, Fine-tuning, and more.",
  icons: {
    icon: `${basePath}/logo.png`,
  },
  openGraph: {
    title: "Everything AI/ML",
    description: "Curated AI & ML learning resources — all in one place.",
    type: "website",
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
