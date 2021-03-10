import { isSorted, Compare } from "../common";
import { insertionSort as sort } from "../insertion-sort";

it("selection sort", () => {
  const decrease: Compare<number> = (a, b) => a <= b;
  const increase: Compare<number> = (a, b) => a >= b;
  const dec = [5, 4, 3, 2, 1];
  const asc = [1, 2, 3, 4, 5];
  const unsorted1 = [1, 3, 2, 5, 4];
  const unsorted2 = [1, 3, 2, 5, 4];

  expect(sort(unsorted1, increase)).toEqual(asc);

  expect(sort(unsorted2, decrease)).toEqual(dec);

  expect(isSorted(unsorted1, increase)).toBe(true);
  expect(isSorted(unsorted2, decrease)).toBe(true);
});
