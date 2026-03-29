"use client";

import { useState, useCallback } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch]
  );

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background:
          "linear-gradient(135deg, #0d0d14 0%, #12121c 100%)",
        borderColor: "var(--border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0 group"
        >
          <span className="text-2xl">🤖</span>
          <div className="hidden sm:block">
            <div
              className="font-bold text-base leading-tight"
              style={{
                background:
                  "linear-gradient(90deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Everything AI/ML
            </div>
            <div
              className="text-xs leading-tight"
              style={{ color: "var(--text-muted)" }}
            >
              Curated learning resources
            </div>
          </div>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <div
            className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
            style={{ color: "var(--text-muted)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search resources, topics, frameworks…"
            className="w-full pl-9 pr-8 py-2 rounded-lg text-sm outline-none transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow =
                "0 0 0 2px var(--accent-glow)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-2 flex items-center px-1 transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--text-muted)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Right links */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <a
            href="https://savvymonk.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background:
                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "#fff",
            }}
          >
            <span>📬</span> Newsletter
          </a>
          <a
            href="https://github.com/viveknaskar/everything-ai-ml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
