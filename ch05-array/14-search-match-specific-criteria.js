//************* COMPENDIUM ********************* */
/*
you want to search an arr for an item that meets certain criteria.
Maybe you looking for an object with a specific property.
Use methods find(), findIndex()
*/
//Returns first match
const nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
const bigNum = nums.find((num) => num > 10); // 19

//Find index of element
const bigNumIndex = nums.findIndex((num) => num > 100); //4
console.log(bigNumIndex);
console.log(bigNum);

//If no match is found for find() = returns undefined, and findIndex() = return -1
