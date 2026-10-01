/**
 * Devuelve una versión memoizada de `fn`: si se llama con los mismos
 * argumentos, devuelve el resultado cacheado sin volver a ejecutar `fn`.
 *
 * - Por defecto la key es JSON.stringify(args).
 * - Permitir una función `resolver` opcional para generar la key.
 */
export function memoize<A extends unknown[], R>(
  fn: (...args: A) => R,
  resolver?: (...args: A) => string,
): (...args: A) => R {
  throw new Error("Not implemented");
}
