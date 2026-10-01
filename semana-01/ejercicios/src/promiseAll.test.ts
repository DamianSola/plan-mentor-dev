import { describe, expect, it } from "vitest";
import { promiseAll } from "./promiseAll";

const delay = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

describe("promiseAll", () => {
  it("mantiene el orden aunque resuelvan en distinto orden", async () => {
    await expect(promiseAll([delay(30, "a"), delay(10, "b"), delay(20, "c")])).resolves.toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it("resuelve [] con array vacío", async () => {
    await expect(promiseAll([])).resolves.toEqual([]);
  });

  it("acepta valores que no son promesas", async () => {
    await expect(promiseAll([1, Promise.resolve(2), 3])).resolves.toEqual([1, 2, 3]);
  });

  it("rechaza si una rechaza", async () => {
    await expect(
      promiseAll([delay(10, 1), Promise.reject(new Error("boom")), delay(20, 3)]),
    ).rejects.toThrow("boom");
  });
});
