export class EncapsulatedCake {
  private _flavor: string;
  private _size: string;
  private _icing: string;

  constructor(flavor: string, size: string, icing: string) {
    this._flavor = flavor;
    this._size = size;
    this._icing = icing;
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

  get size(): string {
    return this._size;
  }

  get icing(): string {
    return this._icing;
  }
}
