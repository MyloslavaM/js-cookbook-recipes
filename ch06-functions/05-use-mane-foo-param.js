//************* COMPENDIUM ********************* */
/*
You want an easier way to chose the optional parameters you send to a foo 
*/
// Bundle all the optional params into a single object literal.
// The caller can decide what optional parameters to include when they create the object literal.

// someFunction(arg1, arg2, { optionalArg: val1, optionalArg2: val2 });

// In your foo, you can use destructuring assignment to quickly copy the value out of the obj literal
// and into separate variables.
// Foo accepts three arguments. The first two are required, but the third param is an obj literal
// that can hold three optional values

function dateDifferenceInSeconds(
  newerDate,
  olderDate,
  { discardTime, discardYears, precision } = {},
) {
  if (discardTime) {
    newerDate = newerDate.setHours(0, 0, 0, 0);
    olderDate = newerDate.setHours(0, 0, 0, 0);
  }
  if (discardYears) {
    newerDate.setYear(0);
    olderDate.setYear(0);
  }

  const differenceInSeconds =
    (newerDate.getTime() - olderDate.getTime()) / 1000;
  return differenceInSeconds.toFixed(precision);
}

// Compare the current date to an older date
const newDate = new Date();
const oldDate = new Date(2010, 1, 10);

// Call the function without an object literal
let difference = dateDifferenceInSeconds(newDate, oldDate);
console.log(difference);

// Call the function with an object literal, and specify two properties
difference = dateDifferenceInSeconds(newDate, oldDate, {
  discardYears: true,
  precision: 2,
});
console.log(difference);
