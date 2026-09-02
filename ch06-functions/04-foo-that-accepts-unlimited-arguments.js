//************* COMPENDIUM ********************* */
/*
You want to create a foo that accepts as many 
arguments (The real data passed into those placeholders during execution)
as the caller wants to supply, 
without requiring the creation of the an arr
*/

// Use a REST PARAMETER when you declare your foo
// The rest parameter is defined with three dots before its name

function sumRounds(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.round(numbers[i]);
  }
  return sum;
}

function sumRoundsB(...numbers) {
  const num = numbers.reduce((accum, val) => accum + val, 0);
  return Math.round(num);
}

function sumRoundsC(...numbers) {
  if (!numbers.every(Number.isFinite)) {
    throw new TypeError("sumRoundsC expects only finite numbers");
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return Math.round(sum);
}
// console.log(sumRoundsC(1, 10, 12));

export { sumRounds, sumRoundsB, sumRoundsC };
