export function wrapInArray<T>(value: T): T[] {
  return [value];
}

export const wrappedNumber = wrapInArray(42);
export const wrappedString = wrapInArray('Hello');
