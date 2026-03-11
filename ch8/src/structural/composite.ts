export interface Shape {
  draw(): string;
}

export class Circle implements Shape {
  draw(): string {
    return 'Drawing a circle.';
  }
}

export class Rectangle implements Shape {
  draw(): string {
    return 'Drawing a rectangle.';
  }
}

export class ShapeGroup implements Shape {
  private readonly shapes: Shape[] = [];

  add(shape: Shape): void {
    this.shapes.push(shape);
  }

  draw(): string {
    return this.shapes.map((shape) => shape.draw()).join('\n');
  }
}

const group = new ShapeGroup();
group.add(new Circle());
group.add(new Rectangle());

export const compositeExample = group.draw();
