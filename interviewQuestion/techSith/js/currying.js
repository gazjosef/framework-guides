var sayWhat = function(a) {
  return function(b) {
    return function(c) {
      console.log("Say" + a + " to " + b + " using " + c);
    };
  };
};

sayWhat("hello")("friends")("javascript");

// var sayHi = sayWhat("hi");
// var sayHiToMe = sayHi("me");
// var sayHiToMeUsingNothing = sayHiToMe("nothing");

/*
"use strict";

var avg = function(...n) {
  let tot = 0;
  for (let i = 0; i < n.length; i += 1) {
    tot += n[i];
  }
  return tot / n.length;
};

var spiceUp = function(fn, ...n) {
  return function(...m) {
    return fn.apply(this, n.concat(m));
  };
};

var doAvg = spiceUp(avg, 1, 2, 3);

console.log(doAvg(4, 5, 6));
*/

/*
var add = function(a) {
  return function(b) {
    return a + b;
  };
};

var addToFive = add(5);

console.log(addToFive(1));
*/
