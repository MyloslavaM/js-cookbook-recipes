//************* COMPENDIUM ********************* */
/*
You need to remove all elements from an arr, either to reclaim memory or so that your arr can be reused
set the length property of your arr to 0
 */
const numbersA = [2, 42, 5, 43, 67, 190];
numbersA.length = 0; // []

console.log(numbersA); // []

const numbersB = [2, 42, 5, 43, 67, 190];
numbersB.length = 3; // [2, 42, 5]

console.log(numbersB); // [2, 42, 5]

// Array.pop()- removes the last element from arr
