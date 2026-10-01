/**
 * Devuelve una versión "debounced" de `fn`: solo se ejecuta cuando pasaron
 * `wait` ms desde la última llamada, con los argumentos de esa última llamada.
 *
 * Requisitos:
 * - Mantener los tipos de los parámetros de `fn` (nada de `any`).
 * - Exponer `.cancel()` para descartar una ejecución pendiente.
 *
 * ⏱️ 15 minutos, sin IA.
 */
export type Debounced<A extends unknown[]> = ((...args: A) => void) & {
  cancel: () => void;
};

export function debounce<A extends unknown[]>(
  fn: (...args: A) => void,
  wait: number,
): Debounced<A> {
  throw new Error("Not implemented");
}
