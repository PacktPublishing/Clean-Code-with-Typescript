export class Car {
  engine = '';
  wheels = 0;
  color = '';

  describe(): string {
    return `Car with ${this.engine} engine, ${this.wheels} wheels, and ${this.color} color.`;
  }
}

export class CarBuilder {
  private readonly car = new Car();

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels: number): this {
    this.car.wheels = wheels;
    return this;
  }

  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  build(): Car {
    return this.car;
  }
}

export const builderExample = new CarBuilder()
  .setEngine('V8')
  .setWheels(4)
  .setColor('red')
  .build()
  .describe();
