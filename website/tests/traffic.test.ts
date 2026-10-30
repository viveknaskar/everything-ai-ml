import { describe, expect, it } from "vitest";
import history from "@/data/traffic-history.json";
import visitors from "@/data/visitor-count.json";

const DATE = /^\d{4}-\d{2}-\d{2}$/;

describe("traffic-history.json", () => {
  it("has well-formed entries", () => {
    for (const e of history) {
      expect(e.date).toMatch(DATE);
      expect(Number.isInteger(e.views) && e.views >= 0, e.date).toBe(true);
      expect(Number.isInteger(e.uniques) && e.uniques >= 0, e.date).toBe(true);
      expect(e.uniques, e.date).toBeLessThanOrEqual(e.views);
    }
  });

  it("is sorted by date with no duplicate dates", () => {
    const dates = history.map((e) => e.date);
    expect(dates).toEqual([...dates].sort());
    expect(new Set(dates).size).toBe(dates.length);
  });
});

describe("visitor-count.json", () => {
  it("has a non-negative integer count and an ISO date", () => {
    expect(Number.isInteger(visitors.count) && visitors.count >= 0).toBe(true);
    expect(visitors.updatedAt).toMatch(DATE);
  });
});
