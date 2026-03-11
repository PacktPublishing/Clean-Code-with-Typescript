export function calculateSquare(input: string): number {
  const num = parseFloat(input);
  if (isNaN(num)) {
    throw new Error('Please enter a valid number.');
  }
  return num * num;
}
