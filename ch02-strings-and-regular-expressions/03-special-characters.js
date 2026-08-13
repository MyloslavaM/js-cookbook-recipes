//************* COMPENDIUM ********************* */
/* if you want to insert special characters into a string
to add an apostrophes use \'
\'          - Single quote
\"          - Double quote
\\          - Backslash
\n          - Newline
\t          - Horizontal tab
...
*/

const favoriteMovie = "My favorite movie is 'Tifanny's Breakfast'.";
console.log(favoriteMovie);

// You can insert insert characters by using the \u escape sequence and the copy-right symbol's
// Unicode value

const copyrightNotice = "This page \u00A9 Shelly Powers";
console.log(copyrightNotice);

// Inserting Emojis
//Emojis it is extended Unicode characteristics
const hamburger = "🍔"; // copy-paste method
const hamburgerStory = "I like hamburgers " + hamburger;
console.assert(hamburger.length === 2, "Hamburger emoji must have length 2");
console.assert(
  typeof hamburgerStory === "string",
  "The type of hamburgerStory should be string",
);
console.log(`🍔 length: ${hamburger.length}`); // => 2- because the hamburger emoji take twice as many bites in memory .

/* Another method is to use the Unicode value for emojis.
The problem you can't use a standard \u 
=> every emoji is stored as s 4-byte value
=> the unicode characters that map to the keys are usually encoded as 2-byte value

the solution is to use the String.fromCodePoint() method
*/

const hamburgerStory1 = `I like hamburgers like ${hamburger} and ${String.fromCodePoint(0x1f354)}`;
// the hamburger emoji has the hexadecimal code U+1F354. To use it with .fromCodePoint(), replace the prefix U+ with 0x
console.log(hamburgerStory1);
