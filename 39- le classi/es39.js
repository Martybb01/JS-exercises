class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape instanceof Square) {
      return shape.side * shape.side;
    }
    if (shape instanceof Rectangle) {
      return shape.height * shape.width;
    }
    if (shape instanceof Circle) {
      return shape.radius * shape.radius * Math.PI;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
