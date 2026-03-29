"use client";

import { Section, Resource } from "@/data/resources";

function badgeStyle(badge: string) {
  if (badge === "Easy")
    return { background: "rgba(34,197,94,0.15)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" };
  if (badge === "Medium")
    return { background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.3)" };
  if (badge === "Hard")
    return { background: "rgba(239,68,68,0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" };
  if (badge === "NEW")
    return { background: "rgba(99,102,241,0.2)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.4)" };
  if (badge === "Beginner")
    return { background: "rgba(34,197,94,0.15)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" };
  if (badge === "Intermediate")
    return { background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.3)" };
  if (badge === "Advanced")
    return { background: "rgba(239,68,68,0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" };
  return { background: "rgba(148,163,184,0.1)", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.2)" };
}

function ResourceLink({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 px-4 py-3 rounded-lg transition-all"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-hover)";
        e.currentTarget.style.borderColor = "#6366f1";
        e.currentTarget.style.boxShadow = "0 0 0 1px rgba(99,102,241,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <svg
        className="w-4 h-4 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "#6366f1" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-sm font-medium leading-snug group-hover:underline"
            style={{ color: "var(--text-primary)" }}
          >
            {resource.title}
          </span>
          {resource.badge && (
            <span
              className="text-xs px-1.5 py-0.5 rounded-md font-medium shrink-0"
              style={badgeStyle(resource.badge)}
            >
              {resource.badge}
            </span>
          )}
        </div>
        {resource.description && (
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {resource.description}
          </p>
        )}
      </div>
      <svg
        className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-40 group-hover:opacity-80 transition-opacity"
        style={{ color: "var(--text-muted)" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

interface Props {
  section: Section;
  searchQuery: string;
}

function matchesSearch(resource: Resource, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    resource.title.toLowerCase().includes(q) ||
    (resource.description?.toLowerCase().includes(q) ?? false) ||
    (resource.badge?.toLowerCase().includes(q) ?? false)
  );
}

export default function ResourceSection({ section, searchQuery }: Props) {
  const filtered = {
    resources: (section.resources ?? []).filter((r) =>
      matchesSearch(r, searchQuery)
    ),
    subsections: (section.subsections ?? [])
      .map((sub) => ({
        ...sub,
        resources: sub.resources.filter((r) => matchesSearch(r, searchQuery)),
      }))
      .filter((sub) => sub.resources.length > 0),
  };

  const totalVisible =
    filtered.resources.length +
    filtered.subsections.reduce((a, s) => a + s.resources.length, 0);

  if (searchQuery && totalVisible === 0) return null;

  return (
    <section id={section.id} className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{section.icon}</span>
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {section.title}
        </h2>
        <span
          className="text-xs px-2 py-0.5 rounded-full ml-auto"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          {totalVisible}
        </span>
      </div>

      {filtered.resources.length > 0 && (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-4">
          {filtered.resources.map((resource) => (
            <ResourceLink key={resource.url} resource={resource} />
          ))}
        </div>
      )}

      {filtered.subsections.map((sub) => (
        <div key={sub.heading} className="mb-4">
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="inline-block h-px flex-1"
              style={{ background: "var(--border)" }}
            />
            {sub.heading}
            <span
              className="inline-block h-px flex-1"
              style={{ background: "var(--border)" }}
            />
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sub.resources.map((resource) => (
              <ResourceLink key={resource.url} resource={resource} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
