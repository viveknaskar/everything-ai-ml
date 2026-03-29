"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ResourceSection from "@/components/ResourceSection";
import { sections } from "@/data/resources";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const totalResources = sections.reduce(
    (acc, s) =>
      acc +
      (s.resources?.length ?? 0) +
      (s.subsections?.reduce((a, sub) => a + sub.resources.length, 0) ?? 0),
    0
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Header onSearch={handleSearch} />

      <div className="max-w-screen-2xl mx-auto flex">
        <Sidebar />

        <main className="flex-1 min-w-0 px-4 md:px-8 py-8">
          {/* Hero */}
          {!searchQuery && (
            <div
              className="mb-10 p-6 rounded-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(59,130,246,0.06) 100%)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, #6366f1 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(99,102,241,0.2)",
                      color: "#818cf8",
                      border: "1px solid rgba(99,102,241,0.3)",
                    }}
                  >
                    🚀 Open Source
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.15)",
                      color: "#4ade80",
                      border: "1px solid rgba(34,197,94,0.3)",
                    }}
                  >
                    Free Resources
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(251,191,36,0.15)",
                      color: "#fbbf24",
                      border: "1px solid rgba(251,191,36,0.3)",
                    }}
                  >
                    Actively Maintained
                  </span>
                </div>
                <h1
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #e2e8f0 0%, #818cf8 60%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Everything AI/ML
                </h1>
                <p className="text-sm md:text-base mb-4" style={{ color: "var(--text-secondary)" }}>
                  A curated cheatsheet of learning resources for Generative AI, Machine Learning,
                  Agentic AI, Prompt Engineering, RAG, Fine-tuning, MLOps, and more.
                </p>
                <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
                  <span className="flex items-center gap-1.5">
                    <span style={{ color: "#6366f1" }}>◆</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{sections.length}</strong> sections
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span style={{ color: "#8b5cf6" }}>◆</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{totalResources}+</strong> curated resources
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span style={{ color: "#60a5fa" }}>◆</span>
                    Beginner → Advanced learning paths
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Search result header */}
          {searchQuery && (
            <div className="mb-6 flex items-center gap-3">
              <span style={{ color: "var(--text-secondary)" }}>
                Results for{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  &quot;{searchQuery}&quot;
                </strong>
              </span>
            </div>
          )}

          {/* Sections */}
          {sections.map((section) => (
            <ResourceSection
              key={section.id}
              section={section}
              searchQuery={searchQuery}
            />
          ))}

          {/* Footer */}
          <footer
            className="mt-16 pt-6 border-t text-center text-sm"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <p className="mb-2">
              Built with ❤️ by{" "}
              <a
                href="https://github.com/viveknaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#818cf8" }}
              >
                Vivek Naskar
              </a>
            </p>
            <p>
              Stay updated →{" "}
              <a
                href="https://savvymonk.beehiiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#818cf8" }}
              >
                SavvyMonk Newsletter
              </a>
              {" · "}
              <a
                href="https://github.com/viveknaskar/everything-ai-ml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#818cf8" }}
              >
                GitHub
              </a>
              {" · "}
              <a
                href="https://github.com/viveknaskar/everything-ai-ml/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#818cf8" }}
              >
                Contribute
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
