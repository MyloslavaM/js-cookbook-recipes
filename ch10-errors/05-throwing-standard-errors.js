//************* COMPENDIUM ********************* */
/*
You want to indicate an error condition by throwing an error object.
*/
function strictDivision(number, divisor) {
  if (divisor == 0) {
    throw new Error("Dividing by zero is not allowed");
  } else {
    return number / divisor;
  }
}
try {
  const result = strictDivision(41, 0);
} catch (error) {
  // shows the custom error message
  console.log(`Error : ${error.message}`);
}
