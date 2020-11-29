// Function Scope

/*
var x = function() {
if (true) {
  var y = 1;
}
if (true) {
  var y = 2;
}
console.log(y);
};
x();
*/

/*
var x = function() {
  var y = 1;
  var z = function() {
    console.log(y);
  };
  z();
};
*/

// Hoisting

/*
var x = function() {
  console.log(y);
  var y = 1;
};
x();
*/

/*define variable at the top of the function*/

/*
var y = 2;
var x = function() {
  console.log(y);
  var y = 1;
};
x();
*/

// Const / Let

let x = function() {
  if (true) {
    let y = 1;
    console.log(y);
  }
};
x();
