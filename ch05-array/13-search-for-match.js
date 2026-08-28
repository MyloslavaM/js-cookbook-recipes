//************* COMPENDIUM ********************* */
/*
you want to search an arr for a specific value. You may want to know if the arr contains a match, 
or the position where that match occurred
use Array.indexOf(), .lastIndexOf(), .includes()
*/
//1. Searching with exact eqaulity
const animals = ["dog", "cat", "seal", "elephant", "walrus", "lion"];
console.log(`Elephant is at ${animals.indexOf("elephant")}`); // 3
console.log(`Walrus is at ${animals.lastIndexOf("walrus")}`); // 4
console.log(`Array includes 'dog': ${animals.includes("dog")}`); // true

//2. Searching with filter criteria
// use filter()
const nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
// Find the first value over 10.
console.log(nums.find((num) => num > 10)); //19
