// * What is the difference between == and ===?

/*
== is the abstract equality operator while === is the strict equality operator.
The == operator will compare for equality after doing any necessary type conversions.
The === operator will not do type conversion, so if two values are not the same type === will simply return false.
*/

// * When using ==, funky things can happen, such as:
console.log(1 == "1"); // true
console.log(1 == [1]); // true
console.log(1 == true); // true
console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log(0 == false); // true

//!     My advice is never to use the == operator, except for:
//?     - convenience when comparing against null 
//?     - undefined, where a == null will return true if a is null or undefined.


var a = null;
console.log(a == null); // true
console.log(a == undefined); // true
