import { append, curry, includes, unless } from 'ramda';

export const appendIfNotIncludes = curry(
  <T extends string | number>(item: T, arr: T[]): T[] =>
    unless<T[], T[]>(includes(item), append(item))(arr)
);
