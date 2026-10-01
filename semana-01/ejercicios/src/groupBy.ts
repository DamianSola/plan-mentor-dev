/**
 * Agrupa los items según la key que devuelve `keyFn`.
 * Mantené el orden original dentro de cada grupo.
 * Nada de `any`: el tipo de las keys debe inferirse de `keyFn`.
 */
export function groupBy<T, K extends PropertyKey>(
  items: readonly T[],
  keyFn: (item: T) => K,
): Record<K, T[]> {
  throw new Error("Not implemented");
}
