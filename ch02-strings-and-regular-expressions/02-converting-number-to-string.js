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

/*JS has 3 utility methods build into the number data type.
Number.toFixed()
Number.toEExponential()
Number.toPrecision()
*/

//======== practice ========
const someNumber = 1234.0055;

//Ask for exactly two decimal points. Numbers will rounded if necessary
const fixedString = someNumber.toFixed(2);
console.assert(
  fixedString.length === 7,
  "The length of someNumder should be 7 (1234.01)",
);

// Ask for 5 significant digits. TBD
const precisionString = someNumber.toPrecision(5);

console.assert(
  precisionString.length === 6,
  "The length of someNumber should be 6 (1234.0)",
);

// Ask for scientific notation with 2 decimal plates. TBD
const scientificString = someNumber.toExponential(2); // => scientificString === 1.23e+3
console.log(scientificString);

// Format number as US currency string
//======== practice ========
const moneyString = (number) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(number);
};
console.assert(
  typeof moneyString(123) === "string",
  "The type of stringConvert should be string",
);
console.assert(
  moneyString(5_000).length === 9,
  "The length of moneyString(5_000) should be 9 => $5,000.00",
);
console.log("all assertions for moneyString function are PASS");
