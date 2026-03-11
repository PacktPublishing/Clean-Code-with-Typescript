type MyConditionalType<T, U, X, Y> = T extends U ? X : Y;

type Animal = "cat" | "dog";
type Sound<T extends Animal> = T extends "cat" ? "meow" : "woof";

let sound1: Sound<"cat">;
let sound2: Sound<"dog">;

sound1 = "meow";
sound2 = "woof";

type AnimalSound<T extends Animal> = MyConditionalType<T, "cat", "meow", "woof">;

const catSound: AnimalSound<"cat"> = sound1;
const dogSound: AnimalSound<"dog"> = sound2;

console.log(catSound, dogSound);

export {};
