"use strict";

function addRange(start, end) {
  let sum = 0;
  for (let i = start; i < end + 1; i++) {
    sum += i;
  }
  return sum;
}

// Add number form 10 to 15
let startNumber = 10;
let endNumber = 15;
console.log(addRange(startNumber, endNumber));

startnumber = 1; // not startNumber
endnumber = 5; //not endNumber
console.log(addRange(startNumber, endNumber));

/*
The purpose of adding the "use strict" directive at the top 
of a file is to force JavaScript to throw a ReferenceError 
when it encounters an assignment to an undeclared variable
*/
