import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everything AI/ML – Curated Learning Resources",
  description:
    "A curated cheatsheet of learning resources for Generative AI, Machine Learning, Agentic AI, Prompt Engineering, RAG, Fine-tuning, and more.",
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
