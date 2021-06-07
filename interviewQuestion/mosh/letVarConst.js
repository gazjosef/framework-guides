//* var: var => function-scope variables
//* ES6 (2015): let, const => blocked-scope variables

/*
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
console.log(start());
*/

/*
function colorize() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      let color = "red";
    }
  }
  console.log(color);
}

colorize();
*/

var color = "green";
let age = 30;
