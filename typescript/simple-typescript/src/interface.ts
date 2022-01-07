/* 
interface A {
  someProp: number;
}

interface B {
  someProp: number;
  anotherProp: number;
}

let a: A = { someProp: 1 };
// let b: B = a;

*/

/* 

// * INTERFACES
interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: "John",
  //   age: 30,
};

// profile.name = "Jim";

// * INDEX SIGNATURE

interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = { someProp: "Some Prop" };
a.x = 1;
a.y = 2;

// Call Signature

interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = "";

// Extending Interfaces

interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {
  x: "some Prop",
  y: "y Prop",
  z: "z Prop",
};

 */
