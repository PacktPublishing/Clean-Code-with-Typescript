export const cakePrototype = {
  bake() {
    console.log("The cake is baking.");
  },
};

export const chocolateCakeFromPrototype = Object.create(cakePrototype) as {
  flavor: string;
  bake: () => void;
};

chocolateCakeFromPrototype.flavor = "Chocolate";

export class Oven {
  bake(): void {
    console.log("The oven is baking.");
  }
}

export class CakeFromOven extends Oven {
  flavor: string;
  size: string;
  icing: string;

  constructor(flavor: string, size: string, icing: string) {
    super();
    this.flavor = flavor;
    this.size = size;
    this.icing = icing;
  }

  decorate(): void {
    console.log(`Decorating the ${this.size} ${this.flavor} cake with ${this.icing} icing.`);
  }

  serve(): void {
    console.log(`Serving the delicious ${this.flavor} cake!`);
  }
}
