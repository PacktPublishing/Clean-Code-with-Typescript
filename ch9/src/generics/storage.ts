export class Storage<T> {
  private readonly items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const stringStorage = new Storage<string>();
stringStorage.addItem('Item 1');
stringStorage.addItem('Item 2');

const numberStorage = new Storage<number>();
numberStorage.addItem(100);
numberStorage.addItem(200);

export const genericStorageExample = {
  strings: stringStorage.getItems(),
  numbers: numberStorage.getItems()
};
