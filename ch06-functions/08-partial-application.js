//************* COMPENDIUM ********************* */
/*
You have a foo that takes several arguments. You want to wrap this foo with one or more
specialized versions that require fewer arguments
*/

// the following makeString() foo accepts three param
function makeString(prefix, str, sufix) {
  return prefix + str + sufix;
}

// However, the first and the last args are often repeated based on a specific use case.
// You can solve this issue by creating new foo that wrap the previously created makeString() foo
// but with known arg values locked down

function quoteString(str) {
  return makeString("'", str, "'");
}
function barString(str) {
  return makeString("-", str, "-");
}
function nameEntity(str) {
  return makeString("&#", str, ";");
}

console.log(quoteString("apple")); //'apple'
console.log(barString("apple")); // -apple-
console.log(nameEntity("apple")); // &#apple;
