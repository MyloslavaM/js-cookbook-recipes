//************* COMPENDIUM ********************* */
/* 
Reliable approach, but not safe from edge cases
*/

function comparison(a, b) {
  if (a.toLowerCase() === b.toLowerCase()) {
    return "matched";
  } else {
    return "not matched";
  }
}

console.assert(
  comparison("hello", "HELLO") === "matched",
  "The values should match",
);
console.assert(
  comparison("hLlo", "HEllo1") === "not matched",
  "The values don't match",
);
console.log("The assertions are PASS for comparison");

/*
for edge cases use String.localeCompare() => referenceStr.localeCompare(compareString, locales, options)
*/
function edgeCaseComparison(a, b) {
  if (a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0) {
    return "matched";
  } else {
    return `doesn't match`;
  }
}

console.assert(
  edgeCaseComparison("hello", "HELLO") === "matched",
  "The assertion should match",
);
console.assert(
  edgeCaseComparison("Hello111", "hello001") === "doesn't match",
  "The assertion shouldn't match",
);

console.log("The assertions are PASS for edgeCaseComparison");
