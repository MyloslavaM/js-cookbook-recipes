//************* COMPENDIUM ********************* */
/*
You want to join two entire arrays together into a new array
!!!!!!!if your arr contains primitive values (num, str, boolean ...) - these are duplicated in the new arr
but if your arr holds an objects - the object reference is copied
 */
const evens = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];
const evensAndOddsA = evens.concat(odds); //[2, 4, 6, 8, 1,3, 5, 7, 9]

console.log(evensAndOddsA);

// In this case the code is more intuitive and easier to read
const evensAndOddsB = [...evens, ...odds]; ////[2, 4, 6, 8, 1,3, 5, 7, 9]

console.log(evensAndOddsB);
