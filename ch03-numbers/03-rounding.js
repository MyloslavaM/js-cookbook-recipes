//************* COMPENDIUM ********************* */
/*
Math.round()
*/

const fractionalNumber1 = 19.48938;
const roundedNumber1 = Math.round(fractionalNumber1);
console.assert(roundedNumber1 === 19, "The number should be 19 after rounding");
console.log(roundedNumber1);
/*
Math.round() this method doesn't take an argument that lets you specify a number of decimal places to keep.
If you want to, multiply your number by the appropriate power of 10, round it, and then divide it by the same power of 10 after rounding.
*/

function roundNumber(value, numberOfDecimalPlaces) {
  const numberToRound = value * 10 ** numberOfDecimalPlaces;
  const roundedNumber = Math.round(numberToRound);
  return roundedNumber / 10 ** numberOfDecimalPlaces;
}
const fractionalNumber = 19.48938;
const roundedNumber = roundNumber(fractionalNumber, 2);
console.log(roundedNumber);
