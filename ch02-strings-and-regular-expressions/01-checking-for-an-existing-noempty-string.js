//************* COMPENDIUM ********************* */

// // 1. if you want to make sure that your variable is a string

// if (typeof unknownVariable === "string") {
//   // unknown var is a string
// }

// // 2. if you vant to check that you have a nonempty string

// if (typeof unknownVariable === "string" && unknownVariable.length > 0) {
//   // this is a genuine string with characters or whitespace in it
// }

// // 3. Optional you may want to reject strings that are made up of whitespace only in which case
// //.   you can use the String.trim() method

// if (typeof unknownVariable === "string" && unknownVariable.trim().length > 0) {
//   // this is genuine string that is not empty or all whitespace
// }

// // 4. this test is only safe if we already known unknownVariable is string
// if (unknownVariable.length > 0) {
// }

// // 5. Try to avoid
// const unknownVariable = new String("hello");

// if (typeof unknownVariable === "string" || unknownVariable instanceof String) {
//   // it is a string primitive or a string wrapped in an object
// }

// approach with code verification and using practices
function isValidString(unknownVariable) {
  return (
    typeof unknownVariable === "string" && unknownVariable.trim().length > 0
  );
}

//========== Testing of the code
// 1. Positive scenarios
console.assert(
  isValidString("hello") === true,
  "Error: As usual this should pass validation",
);
console.assert(
  isValidString("        hello     ") === true,
  "Error: As usual this should pass validation ",
);

// 2. Negative scenarios
console.assert(isValidString(123) === false, "Number should be rejected.");
console.assert(isValidString("") === false, "Empty string should be rejected.");
console.assert(
  isValidString("   ") === false,
  "String with empty symbols should be rejected.",
);
console.assert(isValidString(null) === false, "Null error should be rejected");
console.assert(
  isValidString(undefined) === false,
  "Undefined error should be rejected.",
);

// 3. Confirmation that all tests have passed
console.log(
  "All tests for Existing string and noempty string validation - PASS",
);
