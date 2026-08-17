//************* COMPENDIUM ********************* */
/* 
String.trim()
*/
const paddedString =
  "         The road is long, with many a winding turn.     ";
const trimmedString = paddedString.trim();
console.log(trimmedString);

/* 
For more complex select replaceAll()
use regexp \s - to identify whitespaces
*/
const paddedString1 =
  "         The  road is long,   with many     a winding turn.     ";
const trimmedString1 = paddedString1.trim().replaceAll(/\s\s+/g, " ");

console.assert(
  trimmedString.length === trimmedString1.length,
  "The length after trim for trimmedString and trimmedString1 should be the same",
);
