//************* COMPENDIUM ********************* */
/*
You array has a lov that you want to pass to a foo.
But the foo expects a list of argument values, not an array obj
 */
const numbers = [2, 42, 5, 304, 1, 13];

//This syntax is not allowed, the result is NaN
const maximumFail = Math.max(numbers); // NaN

// BUt this works, thanks to a spread operator
const maximumA = Math.max(...numbers); // 304
//The spread operator unfolds an arr into a list of elements.
//Technically, it works with any iterable object.

const maximumB = Math.max(24, ...numbers, 96); // 304
console.log(maximumB);
