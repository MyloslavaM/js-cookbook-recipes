import { describe, test, expect } from "@jest/globals";
import { factorialize } from "./07-unit-test";

describe("factorialize", () => {
  test("0! is 1", () => {
    expect(factorialize(0)).toBe(1);
  });
  test("1 is 1", () => {
    expect(factorialize(1)).toBe(1);
  });
  test("10! is 3628800", () => {
    expect(factorialize(10)).toBe(3628800);
  });
  test(" '5' is 120", () => {
    expect(factorialize("5")).toBe(120);
  });
  test("NaN causes error", () => {
    expect(() => factorialize(NaN)).toThrow();
  });
});

// To optimize, using test.each()
describe("factorialize", () => {
  test.each([
    [0, 1],
    [1, 1],
    [10, 3628800],
    ["5", 120],
  ])("Factorialize (%p) returns %p", (input, expected) => {
    expect(factorialize(input)).toBe(expected);
  });
  test("NaN causes error", () => {
    expect(() => factorialize(NaN)).toThrow();
  });
});
