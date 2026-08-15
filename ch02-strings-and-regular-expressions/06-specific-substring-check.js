//************* COMPENDIUM ********************* */
/* 
Check if one string contains another substring 
use String.includes() method
*/

const searchString = "infinitely";
const fullText =
  "I know not where I was born, save that the clastle was" +
  "infinitely old and infinitely horrible";
console.assert(
  fullText.includes(searchString) === true,
  "The fullText should contain searchString",
);

function searcher(text, word) {
  if (text.toLowerCase().includes(word.toLowerCase())) {
    return "this word is present in the text";
  } else {
    return "No such word in the text";
  }
}

console.assert(
  searcher("hello, hello, many ", "HELLO") ===
    "this word is present in the text",
  "The word 'HELLO' should be present in text",
);
console.assert(
  searcher(fullText, "love") === "No such word in the text",
  "The word 'love' shouldn't been present in text",
);

console.log("All assertions are PASS");
