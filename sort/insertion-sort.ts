import { Compare, swap } from "./common";

export const insertionSort = <T>(list: T[], compare: Compare<T>): T[] => {
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j > 0 && !compare(list[j], list[j - 1]); j--) {
      swap(list, j, j - 1);
    }
  }
  return list;
};
