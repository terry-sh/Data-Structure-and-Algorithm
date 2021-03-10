export type Compare<T> = (a: T, b: T) => boolean;

export const isSorted = <T>(list: T[], compare: Compare<T>): boolean => {
  for (let i = 1; i < list.length; i++) {
    if (!compare(list[i], list[i - 1])) {
      return false;
    }
  }
  return true;
};

export const swap = <T>(list: T[], i: number, j: number): void => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};
