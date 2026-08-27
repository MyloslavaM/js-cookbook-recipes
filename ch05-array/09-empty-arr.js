//************* COMPENDIUM ********************* */
/*
You need to remove all elements from an arr, either to reclaim memory or so that your arr can be reused
set the length property of your arr to 0
 */
const numbers = [2, 42, 5, , 67, 190];
numbers.length = 0;

console.log(numbers); // []
