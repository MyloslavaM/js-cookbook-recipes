//************* COMPENDIUM ********************* */

// Old approach
// const someNumber = 43;
// const someString = someNumber + "";

//======== practice ========
function stringConverter(someNumber) {
  return someNumber + "";
}

console.assert(
  typeof stringConverter(123) === "string",
  "The type of someString should be string",
);
console.assert(
  typeof stringConverter("123") === "string",
  "The type of someString should be string",
);
console.assert(
  typeof stringConverter() === "string",
  "The type of someString should be string",
);
console.log("all assertions for stringConvert are PASS");

// modern approach
// const someNumber = 42;
// const someString = someNumber.toString();

//======== practice ========
function stringConvert2(someNumber) {
  return someNumber.toString();
}

console.assert(
  typeof stringConvert2(123) === "string",
  "The type of stringConvert should be string",
);
console.assert(
  typeof stringConvert2("123") === "string",
  "The type of stringConvert should be string",
);
console.assert(
  typeof stringConvert2([1, 2, 3]) === "string",
  "The type of stringConvert should be string",
);
console.log("all assertions for stringConvert2 are PASS");

//
