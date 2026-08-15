//************* COMPENDIUM ********************* */
/* 
Important!!! if you don't perform next steps, you can left open security hole
*/

const originalPieceOfHtml = "<p>This is  a <span>paragraph</span></p>";

// Get a new string with no < characters
let safePieceOfHtml = originalPieceOfHtml.replaceAll("<", "&lt;");

// Get a new string with no > characters
safePieceOfHtml = safePieceOfHtml.replaceAll(">", "&lt;");

// Show in the page
document.getElementById("placeholder").innerHtml = safePieceOfHtml;
