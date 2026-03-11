export const loopNumbers = [1, 2, 3, 4, 5];

export function sumNumbersWithLoop(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

export function sumNumbersWithReduce(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export function factorialTailRecursive(n: number, acc = 1): number {
  if (n <= 1) return acc;
  return factorialTailRecursive(n - 1, n * acc);
}

export function factorialIterative(n: number): number {
  let acc = 1;
  for (let i = 2; i <= n; i++) {
    acc *= i;
  }
  return acc;
}
