import { describe, expect, it, vi } from "vitest";
import { retry } from "./retry";

describe("retry", () => {
  it("devuelve el resultado si sale bien al primer intento", async () => {
    const fn = vi.fn().mockResolvedValue("ok");
    await expect(retry(fn, { retries: 3, delayMs: 1 })).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("reintenta hasta que sale bien", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("1"))
      .mockRejectedValueOnce(new Error("2"))
      .mockResolvedValue("ok");
    await expect(retry(fn, { retries: 3, delayMs: 1 })).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it("rechaza con el último error al agotar reintentos", async () => {
    let n = 0;
    const fn = vi.fn(async () => {
      n++;
      throw new Error(`fallo ${n}`);
    });
    await expect(retry(fn, { retries: 2, delayMs: 1 })).rejects.toThrow("fallo 3");
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
