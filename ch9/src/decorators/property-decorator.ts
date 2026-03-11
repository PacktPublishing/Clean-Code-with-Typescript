const decoratedProperties: string[] = [];

export function LogProperty(target: object, propertyKey: string): void {
  decoratedProperties.push(`${target.constructor.name}.${propertyKey}`);
}

export class DecoratedProfile {
  @LogProperty
  name = 'John Doe';
}

export const propertyDecoratorExample = {
  metadata: decoratedProperties,
  instance: new DecoratedProfile()
};
