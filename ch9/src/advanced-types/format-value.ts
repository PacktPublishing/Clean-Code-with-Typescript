export function formatValue(value: string | number): string {
  return `Value: ${value}`;
}

export const formattedValues = [formatValue('Hello'), formatValue(42)];
