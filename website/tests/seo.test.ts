import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const SITE = "https://everythingaiml.thedeveloperstory.com";

describe("robots", () => {
  it("allows all crawlers and points at the sitemap", () => {
    const r = robots();
    expect(r.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(r.sitemap).toBe(`${SITE}/sitemap.xml`);
  });
});

describe("sitemap", () => {
  it("lists the home page with top priority", () => {
    const entries = sitemap();
    expect(entries).toHaveLength(1);
    expect(entries[0].url).toBe(SITE);
    expect(entries[0].priority).toBe(1);
    expect(entries[0].lastModified).toBeInstanceOf(Date);
  });
});
