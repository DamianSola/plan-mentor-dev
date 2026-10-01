/**
 * Devuelve una versión "throttled" de `fn`: se ejecuta como máximo una vez
 * cada `wait` ms. La primera llamada se ejecuta inmediatamente (leading).
 * Las llamadas dentro de la ventana se ignoran.
 *
 * Bonus (sin test): agregar opción `trailing` para ejecutar la última llamada
 * al cerrar la ventana.
 */
export function throttle<A extends unknown[]>(
  fn: (...args: A) => void,
  wait: number,
): (...args: A) => void {
  throw new Error("Not implemented");
}
