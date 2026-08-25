//************* COMPENDIUM ********************* */
/*
You want to make a copy of an existing arr
*/
// 1. Use spread operator
const numbers = [2, 42, 5, 304, 1, 13];
const numbersCopyA = [...numbers];

// 2. An equally good approach is to use Array.slice() method with no arguments,
// which tells it to make a slice of the entire array

const numbersCopyB = numbers.slice();

// To create a deep copy
const numbersCopyC = numbers.map((element) => ({ ...element }));

console.log(numbersCopyA == numbers);
console.log(numbersCopyA === numbersCopyC);
