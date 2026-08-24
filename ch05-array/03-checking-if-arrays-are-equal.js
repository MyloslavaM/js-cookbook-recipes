//************* COMPENDIUM ********************* */
/*
you want a simple way to test if two arrays are equivalent (have exactly the same content)
 */
function areArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These object are null, uncleared, or non-array object
    return false;
  } else if (arrayA.length !== arrayB.length) {
    //They cant match if they have a different item count
    return false;
  } else {
    //Time to look closer to each item
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}
const fruitNamesA = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesB = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesC = ["kiwi", "apple", "grapefruit", "kumquat"];
const fruitNamesD = [
  "avocado",
  "squash",
  "red pepper",
  "cucumber",
  "Avocado",
  "Banana",
];
console.log(areArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(areArraysEqual(fruitNamesA, fruitNamesD)); // false

//you can easily sort num or string using Array.sort() method
console.log(areArraysEqual(fruitNamesA.sort(), fruitNamesC.sort())); // true

const date1 = [new Date(2030, 2, 2)];
const date2 = [new Date(2030, 2, 2)];
console.log(areArraysEqual(date1, date2)); //false
/*
You need use Date.getTime()
*/
function areArraysEqualDate(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    return false;
  } else if (arrayA === arrayB) {
    return true;
  } else if (arrayA.length !== arrayB.length) {
    return false;
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] instanceof Date && arrayB[i] instanceof Date) {
        if (arrayA[i].getTime() !== arrayB[i].getTime()) {
          return false;
        }
      }
    }
    return true;
  }
}
console.log(areArraysEqualDate(date1, date2));
