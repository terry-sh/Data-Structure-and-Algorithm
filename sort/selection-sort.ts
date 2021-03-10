import { Compare, swap } from "./common";

export const selectionSort = <T>(list: T[], compare: Compare<T>): T[] => {
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (!compare(list[j], list[min])) {
        min = j;
      }
    }
    swap(list, i, min);
  }
  return list;
};
