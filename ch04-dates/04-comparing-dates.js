//************* COMPENDIUM ********************* */
/*
You need to see if two Date objects represent the same calendar date, or determine if
one date is before another
*/
const oldDay = new Date(1999, 10, 20);
const newerDate = new Date(2021, 1, 1);

// When you use < or > operator it is automatically converted to numbers and compare
if (newerDate > oldDay) {
  console.log("it si true");
}

// in case of =, it is tests the object reference, not the content
const date1 = new Date(2021, 1, 1);
const date2 = new Date(2021, 1, 1);
console.log(date1 === date2); // false
console.log(date1.getTime() === date2.getTime()); // true

// in case it is today
const today = new Date();
/*
Create another  copy of the current date 
the day hasn't changed, but the time may have already ticked on to the 
next millisecond 
*/
const todayDifferent = new Date();
// This could be tru or false, depending on timing factors beyond your control
console.log(today.getTime() === todayDifferent.getTime());

//Remove all time information
today.setHours(0, 0, 0, 0);
todayDifferent.setHours(0, 0, 0, 0);

//This is always true, as time has been removed from both instances
console.log(today.getTime() === todayDifferent.getTime());
