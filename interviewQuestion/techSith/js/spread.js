let x = [1, 2, 3, 4];
let y = [5, 6, 7];

// let y = x;
// let y = Object.assign([], x);

console.log(x.concat(...y));
console.log(...x, ...y);

console.log(y);
