export function calculateAverageWithBug(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i <= numbers.length; i++) {
    console.log(`Index: ${i}, Value: ${numbers[i]}`);
    sum += numbers[i] as number;
  }

  console.log(`Sum: ${sum}, Length: ${numbers.length}`);
  return sum / numbers.length;
}

export function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}
