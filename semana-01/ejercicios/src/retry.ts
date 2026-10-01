/**
 * Ejecuta `fn` y, si falla, la reintenta hasta `retries` veces más.
 * Entre intentos espera `delayMs * 2 ** intento` (backoff exponencial:
 * 1er reintento = delayMs, 2do = delayMs*2, ...).
 * Si se agotan los reintentos, rechaza con el ÚLTIMO error.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { retries: number; delayMs: number },
): Promise<T> {
  throw new Error("Not implemented");
}
