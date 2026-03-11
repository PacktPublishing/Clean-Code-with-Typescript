export interface Pair<T, U> {
  first: T;
  second: U;
}

export const coordinatePair: Pair<number, number> = { first: 10, second: 20 };
export const nameAndAgePair: Pair<string, number> = { first: 'Alice', second: 30 };
