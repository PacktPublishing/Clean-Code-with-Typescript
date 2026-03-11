export type Coordinate = { x: number; y: number };

export const point: Coordinate = { x: 10, y: 20 };

export type Direction = 'up' | 'down' | 'left' | 'right';

export function move(direction: Direction): string {
  return `Moving ${direction}`;
}

export const directionExample = move('up');
