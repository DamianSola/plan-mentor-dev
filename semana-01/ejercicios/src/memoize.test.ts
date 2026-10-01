import { describe, expect, it, vi } from "vitest";
import { memoize } from "./memoize";

describe("memoize", () => {
  it("cachea por argumentos", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const m = memoize(fn);
    expect(m(1, 2)).toBe(3);
    expect(m(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("recalcula con argumentos distintos", () => {
    const fn = vi.fn((a: number) => a * 2);
    const m = memoize(fn);
    m(1);
    m(2);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("usa el resolver si se pasa", () => {
    const fn = vi.fn((user: { id: number; name: string }) => user.name.toUpperCase());
    const m = memoize(fn, (u) => String(u.id));
    m({ id: 1, name: "ana" });
    expect(m({ id: 1, name: "otro nombre" })).toBe("ANA");
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
