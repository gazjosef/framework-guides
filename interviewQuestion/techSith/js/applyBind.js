// Call

var obj = { num: 2 };
// var obj2 = { num: 5 };

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 2, 3));

// functionName.call(obj, functionArguments)

// Apply

var arr = [1, 2, 3];
// console.log(addToThis.apply(obj, arr));
// console.log(addToThis.apply(obj2, arr));

// functionName.apply(obj [arg1, arg2, arg3])

// Bind

var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));

console.dir(bound);
