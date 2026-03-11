type Person = {
  name: string;
  age: number;
  greet: () => void;
};

const persons: Person[] = [
  {
    name: "Alice",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
  },
  {
    name: "Bob",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
  },
];

persons.forEach((person) => person.greet());

export {};
