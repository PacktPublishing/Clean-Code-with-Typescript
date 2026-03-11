export class Cake {
  flavor: string;
  size: string;
  icing: string;

  constructor(flavor: string, size: string, icing: string) {
    this.flavor = flavor;
    this.size = size;
    this.icing = icing;
  }

  bake(): void {
    console.log("Cake is baking in the oven!");
  }

  decorate(): void {
    console.log("Adding frosting and sprinkles!");
  }

  serve(): void {
    console.log("Slicing and serving the delicious cake!");
  }
}

export const chocolateCake = new Cake("chocolate", "medium", "chocolate");
export const redVelvetCake = new Cake("red velvet", "large", "cream cheese");
