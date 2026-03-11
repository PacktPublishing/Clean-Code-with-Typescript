import { performance } from 'perf_hooks';

export function slowFunction(): number {
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }
  return total;
}

export function measureSlowFunction(): number {
  const start = performance.now();
  slowFunction();
  const end = performance.now();
  return end - start;
}
