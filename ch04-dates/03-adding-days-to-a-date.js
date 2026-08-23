//************* COMPENDIUM ********************* */
/*
You want to find a date that's a specific number of days before or after another date
*/
const today = new Date();
const currentDate = today.getDate();

//Where will be three weeks in the future?
today.setDate(currentDate + 21);
console.log(`Three weeks from today is ${today}`);

// As the Date object is mutable!!! Better to clone data before modify it

const originalDate = new Date();

//Clone the date
const futureDate = new Date(originalDate.getTime());
futureDate.setDate(originalDate.getDate() + 21);
console.log(`Three weeks from ${originalDate} is ${futureDate}`);
//Method	Returns	Use case
/*
.getDate()	Day of month only (1–31)	"What day of the month is this?"
.getMonth()	Month only (0–11)	"What month is this?"
.getFullYear()	Year only	"What year is this?"
.getTime()	Full timestamp (ms since epoch)	Copying dates, comparing dates, math with dates
*/
