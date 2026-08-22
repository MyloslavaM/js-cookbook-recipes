//************* COMPENDIUM ********************* */
/*
Date object that provides good support for manipulating date information
When you create a new Date object, it is automatically populated with the current day and time
*/
const today = new Date();

console.log(today);
console.log(`This year is ${today.getFullYear()}`);
console.log(`This month is ${today.getMonth()}`); // 0 to 11; 0 it is January
console.log(`This date is ${today.getDate()}`);
console.log(`This day is ${today.getDay()}`); // 0 to 6; 0 it is Sunday

// Do a little extra string processing to make sure minutes are padded with
// a leading 0 if needed to make a two-digit value (like '05' in the time 4:05)
//padStart() method pads the beginning of a string with another string until it reaches a specified target length.
const hours = today.getHours();
const minutes = today.getMinutes().toString().padStart(2, "0");
console.log(`Time ${hours}:${minutes}`);
