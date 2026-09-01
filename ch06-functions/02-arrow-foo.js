//************* COMPENDIUM ********************* */
/*
You want to use JS's arrow syntax to declare an inline foo in the most compact way possible
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example with using arr map
function squareNumber(num) {
  return num ** 2;
}
const squares = numbers.map(squareNumber); //[1,  4,  9, 16,  25,  36, 49, 64, 81, 100]
console.log(squares);
//=================================
// Using arr foo

const squaresA = numbers.map((number) => number ** 2); //[1,  4,  9, 16,  25,  36, 49, 64, 81, 100]
console.log(squaresA);
//And what map always does, no exceptions: returns a new array of the same length, leaving the original untouched.
// If you find yourself not using the returned array, you wanted forEach instead.

/*
How ot convert a named foo to a foo expression that uses arr foo
    1. Put the list of parameters first, followed the symbol => 
    If there are no params, use an empty set of params before the => symbol

  (number) => 
  
    2. if there exact one param, you can remove the parentheses around the param list

  number =>
  
    3. Put the braces and body of the foo on the other side of the arr

  number => {
    return number ** 2
    }

    4. If there is just one statement, you can remove {} and return keyword. 
    But, if you have more that one statement, you must keep both the braces and the return keyword

  number => number ** 2
*/
