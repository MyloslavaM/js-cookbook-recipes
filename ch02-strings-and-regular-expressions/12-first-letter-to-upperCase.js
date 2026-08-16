//************* COMPENDIUM ********************* */
/* 
toUpperCase()
slice() => 
When you use slice() method, you must always specify the index where you want to start your string extraction.
example: text.slice(5) = starts at index position 5, continues to the end of the string 
if you don't want slice() to continue to the end of the string copying should stop
text.slice(5, 10)
start (Optional): The zero-based index where extraction begins.
end (Optional): The zero-based index before which extraction ends (the element at end is not included).
let str = "hello";
let newStr = "X" + str.slice(1); => Xello
*/

const original = "if you cut an orange";
const fixed = original[0].toUpperCase() + original.slice(1);

console.log(fixed);
