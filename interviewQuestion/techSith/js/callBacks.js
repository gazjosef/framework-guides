/*
let x = function() {
  console.log("I am called from inside a function");
};

let y = function(callback) {
  console.log("do something");
  callback();
};

y(x);
console.log(y(x));
*/

/*
let calc = function(num1, num2, calcType) {
  if (calcType === "add") {
    return num1 + num2;
  } else if (calcType === "multiply") {
    return num1 * num2;
  }
};

console.log(calc(2, 3, "add"));
*/

/*
let add = function(a, b) {
  return a + b;
};

let multiply = function(a, b) {
  return a * b;
};

let doWhatEver = function(a, b) {
  console.log(`here are your two numbers back: ${a} ${b}`);
};

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  }
};

console.log(calc(2, 3, doWhatEver));
// console.log(
//   calc(2, 3, function(a, b) {
//     return a - b;
//   })
// );
*/

const myArr = [
  { num: 5, str: "apple" },
  { num: 7, str: "cabbage" },
  { num: 1, str: "banana" }
];

myArr.sort((val1, val2) => {
  if (val1.str > val2.str) {
    return 1;
  } else {
    return -1;
  }
});

console.log(myArr);
