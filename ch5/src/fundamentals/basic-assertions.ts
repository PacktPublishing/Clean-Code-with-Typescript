export function add(a: number, b: number): number {
  return a + b;
}

export function runBasicAssertionDemo(): void {
  console.log('test should run here');
  console.assert(add(2, 3) === 5, 'add(2, 3) should return 5');
}
