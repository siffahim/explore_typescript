"use strict";
//polymorphism
class Father {
    property() {
        console.log("Father Rest property is 9");
    }
}
class ElderSon extends Father {
    property() {
        console.log("ElderSon Rest property is 5");
    }
}
class YoungerSon extends Father {
    property() {
        console.log("YoungerSon Rest property is 4");
    }
}
const getProperty = (param) => {
    param.property();
};
const person1 = new Father();
const person2 = new ElderSon();
const person3 = new YoungerSon();
getProperty(person1);
getProperty(person2);
getProperty(person3);
//another example of polymorphism:
class Shape {
    getArea() {
        return `There has no area for nothing`;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return `The circle is ${Math.PI * this.radius * this.radius}`;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return `The rectangle is ${this.height * this.width}`;
    }
}
function getShapeArea(param) {
    console.log(param.getArea());
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 12);
getShapeArea(circle);
getShapeArea(rectangle);
