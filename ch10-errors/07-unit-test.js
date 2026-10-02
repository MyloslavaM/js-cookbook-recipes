//************* COMPENDIUM ********************* */
/*
You want to use automated tests to ensure your code matches your design criteria now and in the future.
*/
function factorialize(number) {
  if (number < 0) {
    throw new Error(`Factorials are only defined for positive numbers`);
  }
  //  .trunc() method directly strips away everything after the decimal point
  if (number != Math.trunc(number)) {
    throw new Error(`Factorials are only defined for integers`);
  } else {
    if (number == 0 || number == 1) {
      return 1;
    } else {
      let result = number;
      while (number > 1) {
        number--;
        result *= number;
      }
      return result;
    }
  }
}

export { factorialize };
