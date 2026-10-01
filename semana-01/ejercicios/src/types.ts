/**
 * Tipos utilitarios. Reemplazá cada `any` por la implementación correcta
 * (sin usar Pick / Partial / Readonly nativos).
 * Verificá con: npm run typecheck   (las líneas `Expect<...>` deben compilar)
 */

export type MyPick<T, K extends keyof T> = any;

export type MyPartial<T> = any;

export type DeepReadonly<T> = any;

// ---------- Tests de tipos (no tocar) ----------
type Equal<X, Y> =
  (<G>() => G extends X ? 1 : 2) extends <G>() => G extends Y ? 1 : 2 ? true : false;
type Expect<T extends true> = T;

type User = { id: number; name: string; address: { city: string; zip: string } };

export type Tests = [
  Expect<Equal<MyPick<User, "id" | "name">, { id: number; name: string }>>,
  Expect<
    Equal<
      MyPartial<User>,
      { id?: number; name?: string; address?: { city: string; zip: string } }
    >
  >,
  Expect<
    Equal<
      DeepReadonly<User>,
      {
        readonly id: number;
        readonly name: string;
        readonly address: { readonly city: string; readonly zip: string };
      }
    >
  >,
];
