class Circle {
  constructor(radius, diameter, x, y) {
    this.radius = radius;
    this.x = x || 0;
    this.y = y || 0;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  diameter() {
    return (this.radius*2);
  }
}

let circle = new Circle(4, 5);
