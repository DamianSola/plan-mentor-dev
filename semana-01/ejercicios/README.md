# Ejercicios — Semana 1

```bash
npm install
npm test                 # todos los tests
npm test -- debounce     # solo un archivo
npm run test:watch       # modo watch
npm run typecheck        # chequea src/types.ts
```

Los tests arrancan **fallando** a propósito. Implementá cada función en `src/<nombre>.ts` (no toques los `.test.ts`, salvo para agregar casos).

| Día | Archivo | Qué implementar |
|---|---|---|
| Lun | `debounce.ts` | Debounce tipado (15 min, **sin IA**) |
| Mar | `throttle.ts`, `memoize.ts` | Throttle y memoize tipados |
| Mié | `promiseAll.ts`, `retry.ts` | `Promise.all` propio y retry con backoff |
| Jue | `groupBy.ts`, `types.ts` | `groupBy` genérico y tipos utilitarios |
