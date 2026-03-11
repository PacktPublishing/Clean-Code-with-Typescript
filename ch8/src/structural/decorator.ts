export interface Coffee {
  cost(): number;
  description(): string;
}

export class BasicCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Basic coffee';
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected readonly coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return `${this.coffee.description()}, milk`;
  }
}

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return `${this.coffee.description()}, sugar`;
  }
}

const decoratedCoffee = new SugarDecorator(new MilkDecorator(new BasicCoffee()));

export const decoratorExample = {
  cost: decoratedCoffee.cost(),
  description: decoratedCoffee.description()
};
