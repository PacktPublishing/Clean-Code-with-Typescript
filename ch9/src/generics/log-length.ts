export function logLength<T extends { length: number }>(item: T): number {
  return item.length;
}

export const genericLengthExamples = [logLength('Hello'), logLength([1, 2, 3])];
