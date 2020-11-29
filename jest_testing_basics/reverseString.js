const reverseString = str =>
  str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

// console.log(reverseString("apple"));

module.exports = reverseString;
