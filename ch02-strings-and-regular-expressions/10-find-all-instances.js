//************* COMPENDIUM ********************* */
/* 
String.matchAll() method returns an iterable iterator 
containing all matching results against a regular expression, including captured groups
 it requires a global (/g) flag

 This object itself is not an array, so you can't read the elements directly by index (e.g. result[0]). 
 To see the contents, you need to loop through it or convert it to an array.
*/

const searchString =
  "Now is the time and this is the time and this is the time";
const regexp = /t\w*e/g;
// const matches = searchString.matchAll(regexp); // need to loop through it or convert it to an array [...searchString.matchAll(regexp)]

// for (const match of matches) {
//   console.log(`at ${match.index} we found ${match[0]}`);
// }

const parser = (stringSearch, regexp) => {
  const result = [];
  const matches = stringSearch.matchAll(regexp);
  for (const match of matches) {
    result.push(`at ${match.index} we found ${match[0]}`);
  }
  return result;
};

console.log(parser(searchString, regexp));
