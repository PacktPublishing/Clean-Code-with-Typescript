export function memoize<T extends string | number>(fn: (arg: T) => number) {
  const cache: Record<string, number> = {};

  return (arg: T) => {
    const key = String(arg);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(arg);
    cache[key] = result;
    return result;
  };
}

export const square = memoize((n: number) => n * n);
