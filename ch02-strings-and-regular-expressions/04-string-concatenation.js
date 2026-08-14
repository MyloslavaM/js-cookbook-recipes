//************* COMPENDIUM ********************* */
/* 
The traditional way to assemble this kind of string is with the 
concatenation operator + 
 */
// const someText = 'Some test' + string + 'some text' + string + '...'

// /*
// Better to use template literals.
// Replace your standard string delimiters with the backtick (`) char.
// */
// const greeting = `Hello from template literal!`
// // Now you can insert your variables directly into your template literal. with ${}

// const someTextBetter = `Some test ${string} some text ${string} ...`

const calculation = `The sum of 5 + 3 is ${5 + 3}`; //=> The sum of 5 + 3 is 8
console.log(calculation);

/*
You can use functions for complex concatenations
If you've created a getDaysSince() foo for calculation the difference between dates
*/

function getDaysSince(date) {
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 100; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs(today - date) / oneDay);
}

// Template literals
const firstName = "Annie";
const lastName = "Harker";
const hireDate = new Date("2020", 5, 22);
const employeeDetail = `Our team includes ${firstName} ${lastName}. They've been a team member since ${hireDate}! That's ${getDaysSince(hireDate)} days.`;
console.assert(
  typeof employeeDetail === "string",
  "The type of employeeDetail should be string",
);
console.log(employeeDetail);
