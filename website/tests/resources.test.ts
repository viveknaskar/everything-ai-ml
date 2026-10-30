import { describe, expect, it } from "vitest";
import { sections, type Resource } from "@/data/resources";

const allResources: Resource[] = sections.flatMap((s) => [
  ...(s.resources ?? []),
  ...(s.subsections ?? []).flatMap((sub) => sub.resources),
]);

describe("resources data", () => {
  it("has sections", () => {
    expect(sections.length).toBeGreaterThan(0);
  });

  it("has unique, kebab-case section ids", () => {
    const ids = sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("gives every section a title, icon, and some content", () => {
    for (const s of sections) {
      expect(s.title.trim(), s.id).not.toBe("");
      expect(s.icon.trim(), s.id).not.toBe("");
      const count =
        (s.resources?.length ?? 0) +
        (s.subsections?.reduce((n, sub) => n + sub.resources.length, 0) ?? 0);
      expect(count, `${s.id} is empty`).toBeGreaterThan(0);
    }
  });

  it("gives every subsection a heading", () => {
    for (const s of sections)
      for (const sub of s.subsections ?? []) {
        expect(sub.heading.trim(), s.id).not.toBe("");
      }
  });

  it("gives every resource a title and an http(s) url", () => {
    for (const r of allResources) {
      expect(r.title.trim(), r.url).not.toBe("");
      const url = new URL(r.url);
      expect(["http:", "https:"], r.title).toContain(url.protocol);
    }
  });

  it("has no whitespace padding in titles, urls, or descriptions", () => {
    for (const r of allResources) {
      expect(r.title, r.title).toBe(r.title.trim());
      expect(r.url, r.title).toBe(r.url.trim());
      if (r.description !== undefined) {
        expect(r.description.trim(), r.title).not.toBe("");
        expect(r.description, r.title).toBe(r.description.trim());
      }
    }
  });

  it("has no duplicate urls within a section", () => {
    for (const s of sections) {
      const urls = [
        ...(s.resources ?? []),
        ...(s.subsections ?? []).flatMap((sub) => sub.resources),
      ].map((r) => r.url);
      const dupes = urls.filter((u, i) => urls.indexOf(u) !== i);
      expect(dupes, s.id).toEqual([]);
    }
  });
});
