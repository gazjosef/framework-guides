// "use strict";

// var getA = function(a) {
//   return a;
// };

// let getA = a => a;

// console.log(getA(1));

// let square = a => a * a;

// console.log(square(2));

// var x = function() {
//   this.val = 1;
//   setTimeout(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };

// var xx = new x();

var x = (...n) => {
  console.log(n[0]);
};

x(1, 2, 3);
