//************* COMPENDIUM ********************* */
/*
you can use Math.random() to generate a floating-point value between 0 and 1
Usually you will scale this fractional value and round it, so you end up with an integer in a specific range.
The Math.floor() static method in JavaScript rounds a number down to the largest integer 
less than or equal to the given value
*/
const max = 6;
const minimum = 1;
const randomNumber = (minimum, max) => {
  return Math.floor(Math.random() * (max - minimum + 1)) + minimum;
};

console.log(randomNumber(minimum, max));
