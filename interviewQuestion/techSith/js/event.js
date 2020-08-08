let anObject = {
  name: "bob",
  age: 20,
  friends: ["john", "kim", "peter"],
  getName: function() {
    return this.name;
  }
};

let numArray = [3, 7, 9, 4];

console.dir(numArray);

let mySet = new Set([1, 2, 2, 2, 3]);

for (let val of mySet) {
  console.log(val);
}

for (let key in anObject) {
  console.log(key);
}

let myString = "hello";

for (let val of myString) {
  console.log(val);
}

let myArray = [1, 2, 3, 4, 5];

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
