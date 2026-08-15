//************* COMPENDIUM ********************* */
/* 
You want to find all occurrences of a specific substring in a string, and replace them with something else.
use String.replaceAll()
*/
const storyText =
  "I know not where I was born, save that the castle was " +
  "infinitely old and infinitely horrible";
const changeStory = storyText.replaceAll("infinitely", "somewhat");

console.assert(
  changeStory.includes("somewhat") === true,
  "The word 'somewhat' should be present in changeStory",
);
console.assert(
  changeStory.includes("infinitely") === false,
  "The word 'infinitely' was replaced to somewhat",
);
console.log("All assertions are pass");
