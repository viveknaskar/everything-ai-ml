"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/resources";

export default function Sidebar() {
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavList = () => (
    <nav className="flex flex-col gap-0.5">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
          style={{
            background:
              active === section.id ? "var(--accent-glow)" : "transparent",
            color:
              active === section.id
                ? "#818cf8"
                : "var(--text-secondary)",
            borderLeft:
              active === section.id
                ? "2px solid #6366f1"
                : "2px solid transparent",
            fontWeight: active === section.id ? 500 : 400,
          }}
          onMouseEnter={(e) => {
            if (active !== section.id) {
              e.currentTarget.style.background = "var(--bg-hover)";
              e.currentTarget.style.color = "var(--text-primary)";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== section.id) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-secondary)";
            }
          }}
        >
          <span className="text-base leading-none">{section.icon}</span>
          <span className="truncate">{section.title}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-sm font-medium"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Sections
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden rounded-t-2xl p-4 transition-transform ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", maxHeight: "70vh", overflowY: "auto" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Jump to section</span>
          <button onClick={() => setIsOpen(false)} style={{ color: "var(--text-muted)" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <NavList />
      </div>

      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col w-60 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-4 px-2"
        style={{ borderRight: "1px solid var(--border)" }}
      >
        <div className="px-3 mb-3">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Sections
          </span>
        </div>
        <NavList />
        <div
          className="mt-auto pt-4 px-3 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p>{sections.length} sections · {sections.reduce((acc, s) => acc + (s.resources?.length ?? 0) + (s.subsections?.reduce((a, sub) => a + sub.resources.length, 0) ?? 0), 0)}+ resources</p>
          <a
            href="https://github.com/viveknaskar/everything-ai-ml/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block hover:underline"
            style={{ color: "#818cf8" }}
          >
            + Contribute a resource
          </a>
        </div>
      </aside>
    </>
  );
}
