import { describe, expect, it } from "vitest";
import { groupBy } from "./groupBy";

type Job = { company: string; status: "applied" | "interview" | "rejected" };

const jobs: Job[] = [
  { company: "A", status: "applied" },
  { company: "B", status: "interview" },
  { company: "C", status: "applied" },
];

describe("groupBy", () => {
  it("agrupa por la key", () => {
    const res = groupBy(jobs, (j) => j.status);
    expect(res.applied.map((j) => j.company)).toEqual(["A", "C"]);
    expect(res.interview.map((j) => j.company)).toEqual(["B"]);
  });

  it("devuelve objeto vacío con array vacío", () => {
    expect(groupBy([] as number[], (n) => n % 2)).toEqual({});
  });

  it("funciona con keys numéricas", () => {
    expect(groupBy([1, 2, 3, 4], (n) => n % 2)).toEqual({ 1: [1, 3], 0: [2, 4] });
  });
});
