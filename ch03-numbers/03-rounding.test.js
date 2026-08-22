import { roundNumber } from "./03-rounding";

const data = [
  { value: 123.4567, round: 2, expected: 123.46 },
  { value: 897.4321111111, round: 5, expected: 897.43211 },
  { value: 1.43747277, round: 1, expected: 1.4 },
  { value: 897.43, round: 3, expected: 897.43 },
];

test.each(data)(
  `round number $value to $round symbols after comma`,
  ({ value, round, expected }) => {
    const result = roundNumber(value, round);
    expect(result).toBe(expected);
  },
);
