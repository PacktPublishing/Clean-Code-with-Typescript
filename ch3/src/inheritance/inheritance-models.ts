export class Animal {
  makeSound(): void {
    console.log("The animal makes a sound");
  }
}

export class DogFromAnimal extends Animal {
  override makeSound(): void {
    console.log("The dog barks");
  }
}

export function AnimalConstructor(): void {}

AnimalConstructor.prototype.makeSound = function (): void {
  console.log("The animal makes a sound");
};

export function DogConstructor(): void {}

DogConstructor.prototype = Object.create(AnimalConstructor.prototype);
DogConstructor.prototype.constructor = DogConstructor;
DogConstructor.prototype.makeSound = function (): void {
  console.log("The dog barks");
};
