const decoratedClasses: string[] = [];

export function LogClass<T extends new (...args: never[]) => object>(constructor: T): T {
  decoratedClasses.push(constructor.name);
  return constructor;
}

@LogClass
export class DecoratedUser {
  constructor(public readonly name: string) {}
}

export const classDecoratorExample = {
  createdClasses: decoratedClasses,
  instance: new DecoratedUser('Alice')
};
