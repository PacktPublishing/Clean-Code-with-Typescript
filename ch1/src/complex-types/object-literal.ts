const person: { name: string; age: number; greet: () => void } = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greet();

export {};
