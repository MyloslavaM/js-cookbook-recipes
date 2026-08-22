import { randomNumber } from "./02-crypto-random-number.mjs";

const ranges = [
  { min: 1, max: 2 },
  { min: 1, max: 6 },
  { min: 1, max: 100 },
];
test.each(ranges)("return a number between $min and $max", ({ min, max }) => {
  const result = randomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});
