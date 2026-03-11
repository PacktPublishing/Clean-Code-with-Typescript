export function sumWithForLoop(numbers: number[]): number {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

export function sumWithReduce(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export const nums = Array.from({ length: 1000000 }, (_, i) => i);
