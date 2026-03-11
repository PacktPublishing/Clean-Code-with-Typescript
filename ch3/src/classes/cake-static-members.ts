export class StaticCake {
  flavor: string;
  size: string;
  icing: string;

  static totalCakesBaked = 0;

  constructor(flavor: string, size: string, icing: string) {
    this.flavor = flavor;
    this.size = size;
    this.icing = icing;
    StaticCake.totalCakesBaked += 1;
  }

  static getTotalCakesBaked(): void {
    console.log(`Baked ${this.totalCakesBaked} cakes in total.`);
  }
}
