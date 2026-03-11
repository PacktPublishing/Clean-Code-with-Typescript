export class ControlledCake {
  private _flavor: string;
  public size: string;
  protected icing: string;

  constructor(flavor: string, size: string, icing: string) {
    this._flavor = flavor;
    this.size = size;
    this.icing = icing;
  }

  get flavor(): string {
    return this._flavor.toUpperCase();
  }

  set flavor(newFlavor: string) {
    if (newFlavor.length < 3) {
      throw new Error("Flavor must be at least 3 characters long!");
    }
    this._flavor = newFlavor;
  }
}
