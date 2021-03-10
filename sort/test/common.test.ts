import { Compare, isSorted, swap } from "../common";

it("common toolings", () => {
  const decrease: Compare<number> = (a, b) => a <= b;
  const increase: Compare<number> = (a, b) => a >= b;
  const dec = [5, 4, 3, 2, 1];
  const asc = [1, 2, 3, 4, 5];
  const unsorted = [1, 3, 2, 5, 4];

  expect(isSorted(dec, decrease)).toBe(true);
  expect(isSorted(asc, increase)).toBe(true);

  expect(isSorted(unsorted, decrease)).toBe(false);
  expect(isSorted(unsorted, increase)).toBe(false);

  swap(unsorted, 1, 2);
  expect(unsorted[1]).toBe(2);
  expect(unsorted[2]).toBe(3);

  swap(unsorted, 3, 4);
  expect(isSorted(unsorted, increase)).toBe(true);
});
