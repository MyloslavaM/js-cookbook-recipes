//************* COMPENDIUM ********************* */
/*
if you want to parse a string and convert it to the number data type 
*/
const stringData = "42";
const numberData = Number(stringData);
console.assert(
  typeof numberData === "number",
  "The typeof numberData should be number",
);
/*
The Number() foo won't accept currency symbols and comma separators

Number converts empty string or string with only whitespace to number 0
*/

const stringData2 = "";
const stringData3 = "QA";

console.log(Number(stringData2), Number(stringData3)); // => 0, NaN
/*
To avoid you can use String.trim()
*/

if (stringData2.trim() === "") {
  console.log("There is no data populated");
}
console.log(typeof Number("QA")); // number
/*
You can also use parseFloat()
*/
console.log(Number("42")); // 42
console.log(parseFloat("42")); // 42

console.log(Number("12 goats")); // NaN
console.log(parseFloat("12 goats")); //12

console.log(Number("goats 12 ")); // NaN
console.log(parseFloat("goats 12 ")); // NaN

console.log(Number("2001/02/01")); // NaN
console.log(parseFloat("2001/02/01")); // 2001

console.log(Number(" ")); // 0
console.log(parseFloat(" ")); // NaN
