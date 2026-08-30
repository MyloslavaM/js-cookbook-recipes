//************* COMPENDIUM ********************* */
/*
you want to ensure that arr contents meet certain criteria
Array.every()
Array.some()
*/

// .every() method to check that every element passes a given test.
// .test() belongs to regExp!!!
function containsLettersOnly(element) {
  const textExp = /^[a-zA-Z]+$/;
  return textExp.test(element);
}
// Test an arr
const mysteryItems = ["**", 123, "aaa", "abc", "-", 46, "AAA"];
const mysteryItems2 = ["cat", "elephant", "lion", "cat", "dog"];

let result = mysteryItems.every(containsLettersOnly);
console.log(`mysteryItems false: ${result}`); // false

result = mysteryItems2.every(containsLettersOnly);
console.log(`mysteryItems2 pass: ${result}`); // true

// array.some()
function testValue(element) {
  const textExp = /^[a-zA-Z]+$/;
  return textExp.test(element);
}
const result2 = mysteryItems.some(testValue);
console.log(`mysteryItems pass: ${result2}`); // true
