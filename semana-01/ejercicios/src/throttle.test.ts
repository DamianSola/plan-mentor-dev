import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { throttle } from "./throttle";

describe("throttle", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("ejecuta inmediatamente la primera llamada", () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("ignora llamadas dentro de la ventana", () => {
    const fn = vi.fn();
    const t = throttle(fn, 100);
    t();
    t();
    vi.advanceTimersByTime(50);
    t();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("vuelve a ejecutar cuando termina la ventana", () => {
    const fn = vi.fn((_n: number) => {});
    const t = throttle(fn, 100);
    t(1);
    vi.advanceTimersByTime(100);
    t(2);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith(2);
  });
});
