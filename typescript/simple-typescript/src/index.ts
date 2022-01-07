import multiply, { multiplyByTwo as mBy2, HelloWorld } from "./multiply";

const a = 5;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a, b)}`);
mBy2(2);

// * TYPES

// Null & Undefinedx

let n: null = null;
let u: undefined = undefined;

let someNumber: number = null;

function upperFirstLetter(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substring(1);
  }
}

console.log(upperFirstLetter("hello"));

upperFirstLetter(null);
