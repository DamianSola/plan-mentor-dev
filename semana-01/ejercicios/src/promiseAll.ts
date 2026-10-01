/**
 * Implementá tu propio Promise.all (sin usar Promise.all / allSettled / any).
 *
 * - Resuelve con los resultados en el MISMO orden que la entrada.
 * - Rechaza apenas una promesa rechaza.
 * - Con array vacío resuelve [].
 * - Acepta valores que no son promesas.
 */
export function promiseAll<T>(values: Array<T | Promise<T>>): Promise<T[]> {
  throw new Error("Not implemented");
}
