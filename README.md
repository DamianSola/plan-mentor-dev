# Plan Mentor Dev — Damián Solá

Plan de 8 semanas para **crecer como dev Full Stack y conseguir laburo** (Junior/Mid, remoto LATAM/Argentina o híbrido Salta/CABA).

- Stack: JS/TS, React, Next.js, Node/Express, Prisma, PostgreSQL, MongoDB
- Portfolio: https://portfolio-damian-two.vercel.app/ · GitHub: [DamianSola](https://github.com/DamianSola)
- Proyecto insignia: **Holos** (ex Noqui)

## Supuestos (ajustalos)

- **Tiempo:** ~10–12 h/semana (≈1.5–2 h/día). Si tenés menos, recortá los "extra" de cada día, no los entregables.
- **Áreas débiles:** todavía no las sabemos. La semana 1 es diagnóstico: anotá dónde te trabás y ajustá las semanas 2–8.
- **Objetivo doble:** mejorar técnicamente **y** conseguir trabajo. Todas las semanas hay algo de búsqueda laboral.
- **Inglés:** B1 → práctica técnica corta todos los días.

## Cómo usar este repo en Cursor

1. Cloná y abrí en Cursor:
   ```bash
   git clone https://github.com/DamianSola/plan-mentor-dev.git
   cd plan-mentor-dev
   cursor .
   ```
2. Trabajá **una carpeta por semana** (`semana-01/`, `semana-02/`…). Leé el `README.md` de la semana y seguí día por día.
3. Ejercicios de código:
   ```bash
   cd semana-01/ejercicios
   npm install
   npm test          # o: npm run test:watch
   ```
   Los tests arrancan fallando: tu trabajo es ponerlos en verde.
4. **El agente de Cursor es tu mentor, no tu reemplazo.** La regla `.cursor/rules/mentor.mdc` le indica que te dé pistas y preguntas, no soluciones. Pedile cosas como:
   - "Dame una pista para el debounce, sin código."
   - "¿Qué caso borde me estoy olvidando?"
   - "Revisá mi solución y decime qué mejorarías (sin reescribirla)."
   - Si de verdad te trabaste >30 min: "Mostrame la solución completa" (y después reescribila de memoria).
5. Registrá cada día con `plantillas/registro-diario.md` (copialo a `semana-XX/registro/AAAA-MM-DD.md`).
6. Commiteá todos los días: `git add . && git commit -m "semana-01 día 1" && git push`.

## Roadmap de 8 semanas

| Semana | Foco técnico | Holos (portfolio) | Búsqueda laboral |
|---|---|---|---|
| 1 | Diagnóstico + fundamentos TS/JS (closures, async, tipos genéricos) | Pitch de 1 min + auditoría del repo | LinkedIn: titular + about; 5 postulaciones |
| 2 | Algoritmos y estructuras (arrays, hash maps, two pointers, recursión) | README pro (problema, stack, arquitectura, capturas) | 5–8 postulaciones + 2 mensajes a devs/recruiters |
| 3 | Testing: Vitest/Jest, Testing Library, mocks, tests de API (supertest) | Tests en lógica crítica y 1–2 endpoints | 5–8 postulaciones; 1 post técnico en LinkedIn |
| 4 | Backend: SQL a mano (JOIN, GROUP BY, índices), Prisma (relaciones, transacciones, migraciones) | Revisar modelo de datos e índices; seed reproducible | 5–8 postulaciones; pedir 1 referido |
| 5 | System design básico: REST, auth (JWT/sesiones), caché, colas, escalado | Diagrama de arquitectura en el README; manejo de errores y logs | 5–8 postulaciones; practicar "contame de un proyecto" |
| 6 | CI/CD y calidad: GitHub Actions, lint, typecheck, deploy | CI (lint + test + build) con badge; demo deployada | 5–8 postulaciones; 1 post técnico |
| 7 | Entrevistas técnicas: live coding, React/Node/SQL, take-home | Pulido final + video demo de 2 min | Mock interviews (Cursor o un colega); seguimiento de postulaciones |
| 8 | Repaso de puntos débiles + inglés técnico en entrevistas | Holos "listo para mostrar" | Ritmo sostenible: 10 postulaciones/semana + plan post-programa |

**Todos los días (15 min):** inglés técnico — leer docs/artículo en inglés y resumir en voz alta 1 min, o responder una pregunta de entrevista en inglés.

**Cadencia semanal de búsqueda (domingo o lunes, ~1 h):** revisar postulaciones, actualizar planilla (empresa, rol, fecha, estado, siguiente paso), 5–8 postulaciones nuevas, 2 mensajes de networking.

## Checklist de progreso

- [ ] Semana 1 — Diagnóstico + fundamentos TS/JS
- [ ] Semana 2 — Algoritmos
- [ ] Semana 3 — Testing
- [ ] Semana 4 — SQL + Prisma
- [ ] Semana 5 — System design básico
- [ ] Semana 6 — CI/CD
- [ ] Semana 7 — Entrevistas técnicas
- [ ] Semana 8 — Repaso + cierre

**Hitos de portfolio y búsqueda**

- [ ] Pitch de Holos en 1 min (español) y en inglés
- [ ] README de Holos profesional
- [ ] Tests + CI en verde en Holos
- [ ] LinkedIn actualizado (titular, about, proyectos destacados)
- [ ] CV de 1 página (español + inglés)
- [ ] 40+ postulaciones registradas
- [ ] 3+ entrevistas realizadas

## Estructura

```
.cursor/rules/mentor.mdc   # regla: el agente actúa como mentor
semana-01/                 # plan detallado + ejercicios
plantillas/                # pitch, registro diario, preguntas de entrevista
```

Las semanas 2–8 se detallan al cerrar la anterior, según lo que salga del registro diario.
