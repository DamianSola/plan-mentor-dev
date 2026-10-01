# Semana 1 — Diagnóstico + fundamentos TS/JS

**Objetivo:** saber dónde estás parado (sin IA), reforzar closures/async/genéricos y dejar listo tu pitch de Holos y tu LinkedIn.
**Tiempo:** ~1.5–2 h/día. **Regla de oro:** primero intentás solo; el agente de Cursor solo da pistas.

Ejercicios en [`ejercicios/`](./ejercicios): `npm install && npm test`.
Registrá cada día con [`../plantillas/registro-diario.md`](../plantillas/registro-diario.md).

---

## Lunes — Diagnóstico (≈1.5 h)

1. **`debounce` tipado sin IA (15 min, cronometrado).** Archivo: `ejercicios/src/debounce.ts`. Sin Cursor agent, sin Google. Al terminar: `npm test -- debounce`.
2. **Pitch de Holos de 1 minuto (20 min).** Usá [`../plantillas/pitch-de-proyecto.md`](../plantillas/pitch-de-proyecto.md): problema, stack y por qué, decisión técnica más difícil. Grabate con el celu.
3. **Autoevaluación (20 min).** Puntuá de 1 a 5: TS genéricos, async/await y event loop, React hooks y renders, Node/Express, SQL a mano, Prisma, testing, Git, system design, inglés oral. Guardalo en `semana-01/diagnostico.md`.
4. **Extra (30 min):** si el debounce no pasó, terminá con pistas del agente y anotá qué te faltó.

**Entregables:** `debounce.ts` (versión sin IA commiteada aunque falle), audio/video del pitch, `diagnostico.md`.
**Éxito:** pitch ≤ 70 s sin leer; sabés explicar por qué el debounce necesita un closure.

## Martes — Closures y funciones de orden superior (≈2 h)

1. Repasá closures, `this`, `call/apply/bind` (30 min, MDN en inglés).
2. **`throttle` tipado** en `ejercicios/src/throttle.ts` (40 min).
3. **`memoize`** en `ejercicios/src/memoize.ts` (30 min): cache por argumentos.
4. Inglés (15 min): explicá en voz alta "What is a closure?" en 1 min.

**Entregables:** tests de `throttle` y `memoize` en verde.
**Éxito:** podés explicar la diferencia debounce vs throttle con un caso real (buscador vs scroll).

## Miércoles — Async, promesas y event loop (≈2 h)

1. Repasá event loop: call stack, microtasks vs macrotasks (30 min). Predecí el orden de 3 snippets con `setTimeout`/`Promise.then` antes de ejecutarlos.
2. **`promiseAll`** propio en `ejercicios/src/promiseAll.ts` (40 min): mismo comportamiento que `Promise.all` (orden, rechazo temprano, array vacío).
3. **`retry`** con backoff en `ejercicios/src/retry.ts` (35 min).
4. Inglés (15 min).

**Entregables:** tests de `promiseAll` y `retry` en verde + notas del event loop en tu registro.
**Éxito:** acertás el orden de los 3 snippets y explicás por qué.

## Jueves — Tipos en TypeScript (≈1.5–2 h)

1. Repasá genéricos, `keyof`, tipos condicionales, utility types (`Pick`, `Omit`, `Partial`, `Record`, `ReturnType`) (30 min).
2. **`groupBy` genérico** en `ejercicios/src/groupBy.ts` (30 min).
3. **Tipos utilitarios** en `ejercicios/src/types.ts` (30 min): implementá `MyPick`, `MyPartial`, `DeepReadonly`. Se verifican con `npm run typecheck`.
4. Revisá 1 archivo de Holos y eliminá `any`s (20 min).

**Entregables:** `groupBy` en verde, `npm run typecheck` sin errores, PR/commit en Holos sacando `any`s.
**Éxito:** explicás qué hace `T[K]` y `K extends keyof T` sin mirar.

## Viernes — Auditoría de Holos (≈2 h)

1. Abrí Holos y hacé una auditoría honesta (60 min): ¿README claro? ¿se levanta con 1 comando? ¿`.env.example`? ¿tests? ¿lint? ¿deploy funcionando? ¿errores en consola?
2. Convertí los hallazgos en una lista priorizada de issues (máx. 10) en el repo de Holos (30 min).
3. Arreglá el issue más chico hoy mismo (30 min).

**Entregables:** `semana-01/auditoria-holos.md` + issues creados + 1 fix commiteado.
**Éxito:** alguien que no conoce Holos entiende qué es en 30 s leyendo el README (pedile a Cursor que lo lea "como recruiter" y te diga qué no se entiende).

## Sábado — LinkedIn + postulaciones (≈2 h)

1. **Titular** (15 min): ej. "Full Stack Developer | React · Next.js · Node · PostgreSQL | Creador de Holos".
2. **About** (30 min): 4–5 líneas: qué hacés, stack, 1 logro concreto (Checkit / Infinium Analytics / SNS Abogados / Holos), qué buscás (remoto LATAM o híbrido Salta/CABA).
3. **Destacados** (15 min): portfolio + Holos + 1 proyecto freelance.
4. **5 postulaciones** (45 min) a roles Junior/Mid. Registralas en una planilla: empresa, rol, link, fecha, estado, siguiente paso.
5. Inglés (15 min): pitch de Holos en inglés (borrador).

**Entregables:** LinkedIn actualizado, planilla con 5 postulaciones.
**Éxito:** las 5 postulaciones con CV adaptado al menos en el resumen.

## Domingo — Repaso y retro (≈1.5 h)

1. **Repetí el `debounce` desde cero sin IA (15 min)** en un archivo nuevo. Compará tiempo y calidad con el lunes.
2. Practicá 5 preguntas de [`../plantillas/preguntas-entrevista.md`](../plantillas/preguntas-entrevista.md) en voz alta (30 min), 1 en inglés.
3. **Retro (20 min)** en `semana-01/retro.md`: qué salió bien, dónde te trabaste, 3 temas débiles para priorizar en semana 2.
4. Grabá el pitch otra vez y compará con el del lunes (15 min).

**Entregables:** `retro.md` con los 3 temas débiles, segunda versión del pitch.
**Éxito:** debounce en < 10 min y pasando tests; pitch más claro que el lunes.

---

## Checklist de la semana

- [ ] Debounce sin IA (lunes) y repetido (domingo)
- [ ] Pitch de Holos v1 y v2
- [ ] `diagnostico.md`
- [ ] Tests en verde: debounce, throttle, memoize, promiseAll, retry, groupBy
- [ ] `npm run typecheck` sin errores (types.ts)
- [ ] `auditoria-holos.md` + issues + 1 fix
- [ ] LinkedIn actualizado
- [ ] 5 postulaciones registradas
- [ ] `retro.md` con 3 temas débiles
