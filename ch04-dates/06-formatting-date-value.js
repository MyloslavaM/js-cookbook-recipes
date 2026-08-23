//************* COMPENDIUM ********************* */
/*
You want to create a formatted string based on a Date object 
use DateTime.toString() method
*/
const date = new Date(2030, 0, 1, 10, 30);
let dateString = date.toString(); // Tue Jan 01 2030 10:30:00 GMT+0200 (Eastern European Standard Time)
dateString = date.toDateString(); // Tue Jan 01 2030
dateString = date.toISOString(); //2030-01-01T08:30:00.000Z
dateString = date.toUTCString(); //Tue, 01 Jan 2030 08:30:00 GMT
console.log(dateString);

// Date *to* localized string
const usDate = new Intl.DateTimeFormat("en-US").format(date);
const ukDate = new Intl.DateTimeFormat("en-GB").format(date);
const jpDate = new Intl.DateTimeFormat("ja-JP").format(date);

console.log(`US: ${usDate}`); // US: 1/1/2030
console.log(`UK: ${ukDate}`); // UK: 01/01/2030
console.log(`Japanese: ${jpDate}`); // Japanese: 2030/1/1

// Customized German date format
const formatter = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(`Custom German: ${formatter.format(date)}`);
