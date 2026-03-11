type LoggedMethod = (...args: number[]) => number;

export function LogMethod(
  _target: object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<LoggedMethod>
): TypedPropertyDescriptor<LoggedMethod> {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: number[]): number {
    if (originalMethod === undefined) {
      throw new Error(`Method ${propertyKey} is not defined.`);
    }

    return originalMethod.apply(this, args);
  };

  return descriptor;
}

export class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

export const methodDecoratorExample = new Calculator().add(2, 3);
