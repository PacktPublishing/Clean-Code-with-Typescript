type Person = {
  name: string;
  age: number;
  greet: () => void;
};

const person: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greet();

export {};
