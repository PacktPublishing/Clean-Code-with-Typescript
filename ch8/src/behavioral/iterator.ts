export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

export class NumberIterator implements Iterator<number> {
  private currentIndex = 0;

  constructor(private readonly numbers: number[]) {}

  hasNext(): boolean {
    return this.currentIndex < this.numbers.length;
  }

  next(): number | null {
    if (!this.hasNext()) {
      return null;
    }

    const value = this.numbers[this.currentIndex];
    this.currentIndex += 1;
    return value;
  }
}

export class NumberCollection {
  constructor(private readonly numbers: number[]) {}

  createIterator(): NumberIterator {
    return new NumberIterator(this.numbers);
  }
}

const iterator = new NumberCollection([1, 2, 3]).createIterator();
const iteratorValues: number[] = [];

while (iterator.hasNext()) {
  const value = iterator.next();
  if (value !== null) {
    iteratorValues.push(value);
  }
}

export const iteratorExample = iteratorValues;
