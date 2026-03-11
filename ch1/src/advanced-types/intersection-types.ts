type Person = {
  name: string;
  age: number;
  greet: () => void;
};

type EmployeeBase = {
  badgeNumber: number;
};

type Employee = EmployeeBase & Person;

const john: Employee = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
  badgeNumber: 2342342,
};

john.greet();
console.log("Badge number:", john.badgeNumber);

export {};
