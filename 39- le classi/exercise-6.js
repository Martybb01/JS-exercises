class Square {
  side;
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  radius;
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape instanceof Square) {
      return shape.side * shape.side;
    } else if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
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
