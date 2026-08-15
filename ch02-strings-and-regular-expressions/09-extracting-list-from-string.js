//************* COMPENDIUM ********************* */
/* 
You want extract the list of items after ':'
before: 'This is a list of items: cherries, limes, oranges, apples
after:   [cherries, limes, oranges, apples]

step 1:
string.indexOf(searchValue, startIndex)

.slice(start, end) = method extracts a portion of an array or a string and returns it as a new object
start (Optional): The zero-based index where extraction begins. 
Negative numbers count backward from the end of the collection
.end (Optional): The zero-based index before which extraction ends (the element at end is not included). 
If omitted, it slices to the very end.

use String.indexOf() to allocate the ':'
use String.indexOf() to find the first period following the colon
*/
const sentence =
  "This is one sentence.This is a sentence with a list of items:" +
  "cherries, limes, oranges, apples. That was the list of items.";

const start = sentence.indexOf(":");
const end = sentence.indexOf(".", start + 1);

const list = sentence.slice(start + 1, end);
console.assert(typeof list === "string", "The type of list should be string");

/*
When you call .split(), you must choose delimiter.
it could be a space, a comma, a series of dashes, etc.
*/

let fruits = list.split(",");
console.assert(
  typeof fruits === "object",
  "The type of fruits is array, which is represented as object",
);

/*
Array.prototype.map() method creates a new array 
populated with the results of calling a provided function on every single element in the original array
*/
fruits = fruits.map((fruit) => fruit.trim());
console.log(fruits);
