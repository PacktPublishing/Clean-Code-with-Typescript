import { square } from '../src/unit/square.js';

test('calculates the square of 3 correctly', () => {
  expect(square(3)).toBe(9);
});

test('calculates the square of -4 correctly', () => {
  expect(square(-4)).toBe(16);
});
