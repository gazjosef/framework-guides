// Explain Hoisting

/*
Hoisting is a term used to explain the behavior of variable declarations in your code.

Variables declared or initialized with the var keyword will have their declaration "moved" up to the top of the current scope, which we refer to as hoisting. However, only the declaration is hoisted, the assignment (if there is one), will stay where it is.

Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes. It is just easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope. Let's explain with a few examples.
*/

// var declarations are hoisted

console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// let/const declarations are NOT hoisted

console.log(bar); // bar
let bar = 2;
console.log(bar); // 2

/*
Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.
*/

// Function Declaration
console.log(rza); // function: rza
rza();
function rza() {
  console.log("WU-TANG!"); // WU-TANG!
}
console.log(rza); // function: rza

// Function Expression
console.log(gza); // undefined
gza(); // gza is not a function
var gza = function() {
  console.log("WU-TANG!");
};
console.log(gza); // function: gza
