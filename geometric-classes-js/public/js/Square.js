class Square {

  constructor(side, x, y) {
    this.side = side;
    this.x = x || 0;
    this.y = y || 0;
    this.delta = this.side/2;
    this.left = (this.x - this.delta);
    this.right = (this.x + this.delta);
    this.top = (this.y + this.delta);
    this.bottom = (this.y - this.delta);

  }

  area() {
    return (this.side*this.side);
  }

  perimeter() {
    return (4*this.side);
  }
  containsPoint(x,y) {
    if (this.left < x && x < this.right && y < this.top && this.bottom < y) {
      return true;
    } else {
      return false;
    }
  }
}
