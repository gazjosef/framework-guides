/*
const obj = {
  number: 10
};

const obj1 = obj;

obj.number++;

console.log(obj);
console.log(obj1);
console.log(obj === obj1);

const obj2 = {
  number: 10
};

console.log(obj2);

*/

let newObj = {
  total: 65,
  increment: 1
};

const cloneObj = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

const incrementTotal = function(obj, val) {
  let newObj = cloneObj(obj);
  newObj.increment = val;
  return function() {
    console.log(newObj.total);
    newObj.total = newObj.total + newObj.increment;
    console.log(newObj.total);
  };
};

const incrementTotal2 = function(obj2, val) {
  obj2.increment = val;
  return function() {
    console.log(obj2.total);
    obj2.total = obj2.total + obj2.increment;
    console.log(obj2.total);
  };
};

const incBy1 = incrementTotal(newObj, 1);

const incBy2 = incrementTotal2(newObj, 2);

console.log(incBy1());
console.log(newObj);
console.log(incBy2());
