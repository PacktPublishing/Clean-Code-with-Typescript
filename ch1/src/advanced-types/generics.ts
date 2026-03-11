function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

interface Car<T> {
  make: string;
  model: string;
  year: number;
  data: T;
}

interface WarrantyInfo {
  warrantyType: string;
  coverageMonths: number;
  expirationDate: Date;
}

const reversedNumbers = reverseArray<number>([1, 2, 3, 4]);
const reversedStrings = reverseArray<string>(["hello", "world"]);

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);

const stringCar: Car<string> = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  data: "Some string data",
};

const numberCar: Car<number> = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
  data: 42,
};

const warrantyCar: Car<WarrantyInfo> = {
  make: "Chevrolet",
  model: "Cruze",
  year: 2021,
  data: {
    warrantyType: "Powertrain",
    coverageMonths: 36,
    expirationDate: new Date("2024-02-28"),
  },
};

console.log(reversedNumbers);
console.log(reversedStrings);
console.log(stringStack.pop());
console.log(numberStack.pop());
console.log(stringCar, numberCar, warrantyCar);

export {};
