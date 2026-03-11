export function processData(data: number[]): number[] {
  const sorted = data.sort((a, b) => a - b);
  return sorted.map((value) => value * 2);
}

export function processDataOptimized(sortedData: number[]): number[] {
  return sortedData.map((value) => value * 2);
}

export const sampleData = [5, 3, 1, 4, 2];
export const sortedData = [...sampleData].sort((a, b) => a - b);
