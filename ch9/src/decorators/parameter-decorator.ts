const decoratedParameters: string[] = [];

export function LogParameter(target: object, propertyKey: string, parameterIndex: number): void {
  decoratedParameters.push(`${target.constructor.name}.${propertyKey}[${parameterIndex}]`);
}

export class Greeter {
  greet(@LogParameter message: string): string {
    return message;
  }
}

const greeter = new Greeter();

export const parameterDecoratorExample = {
  metadata: decoratedParameters,
  message: greeter.greet('Hello!')
};
