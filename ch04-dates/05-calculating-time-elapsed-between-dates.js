//************* COMPENDIUM ********************* */
/*
You need to calculate how many days, hours, or min separate two dates
*/
//Days are numbers in milliseconds
const oldDate = new Date(2021, 1, 1);
const newerDate = new Date(2021, 10, 1);
const differentMillisecondsDates = newerDate - oldDate;
console.log(differentMillisecondsDates); // 23587200000 in milliseconds

const millisecondsPerDay = 1000 * 60 * 60 * 24;

let differenceInDates = differentMillisecondsDates / millisecondsPerDay;

// Only cont whole days
differenceInDates = Math.trunc(differenceInDates);

console.log(differenceInDates);
