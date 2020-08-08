// Constructors

// "use strict";

// let Cars = function(color) {
//   if (!new.target) throw "Car() must be called with new";
//   this.color = color;
// };

// let redCar = new Cars("red");
// let blueCar = new Cars("blue");
// let greenCar = Cars("green");

// console.log(redCar.color);
// console.log(blueCar.color);
// console.log(window.color);

let Car = function(color) {
  this.color = color;
};
Car.prototype.getColor = function() {
  return this.color;
};

let redCar = new Car("red");

console.log(redCar.getColor());
console.log(redCar);
console.log(redCar.toString());
console.dir(redCar);
