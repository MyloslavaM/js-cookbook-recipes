//************* COMPENDIUM ********************* */
/*
You want to create a custom class that inherits the functionality of another class.
*/
/* eslint-disable max-classes-per-file */
// This is parent class
class Shape {
  getArea() {
    return null;
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    // Call the base class constructor
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  getArea() {
    return this.length ** 2;
  }
}

// create an array of different shapes

const shapes = [new Triangle(15, 8), new Circle(8), new Square(7)];

// log each shape separately so we're not fooled by lazy evaluation in the devtools.
shapes.forEach((el) => console.log(el));

// Sort them by area from smallest to largest
shapes.sort((a, b) => a.getArea() - b.getArea());

// Sorted order
console.log(shapes);

const triangle = new Triangle(15, 8);

if (triangle instanceof Shape) {
  console.log("Triangle is a Shape");
}
