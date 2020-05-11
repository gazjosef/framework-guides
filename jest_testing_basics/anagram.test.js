const isAnagram = require("./anagram");

test("Does isAnagram function exist?", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'Cinema' is an anagram of 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("'Dormitory' is an anagram of 'dirty room'", () => {
  expect(isAnagram("Dormitory", "dirty room")).toBeTruthy();
});

test("'Hello' is NOT an anagram of 'aloha'", () => {
  expect(isAnagram("Hello", "aloha")).toBeFalsy();
});
