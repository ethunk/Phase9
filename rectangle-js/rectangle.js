class Rectangle {
  constructor(width, height) {
    this.width = width;
    // check if height is provided
    if (!!height) {
      this.height = height;
    } else {
      this.height = width;
    }
  }
  area() {
    let area = (this.width * this.height);
    return area;
  }
}
test = new Rectangle(4,5);
