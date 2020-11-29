const reversestring = require("./reverseString.js");

test("reverseString function exists", () => {
  expect(reversestring).toBeDefined();
});

test("String reverses", () => {
  expect(reversestring("hello")).toEqual("olleh");
});

test("String reverses with uppercase", () => {
  expect(reversestring("Hello")).toEqual("olleh");
});
