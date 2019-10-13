import { curry, findIndex, when, remove } from 'ramda';

export const removeIfIncludes = curry(
  <T extends string | number>(item: T, arr: T[]): T[] => {
    const indexToRemove = findIndex<T>(val => val === item)(arr);
    return when<T[], T[]>(() => indexToRemove !== -1, remove(indexToRemove, 1))(
      arr
    );
  }
);
