//************* COMPENDIUM ********************* */
/*
you want to use all the val in an arr in some sort of aggregate calculation, 
like computing a sum or average
use Array.reduce() 
foo is called for each element in the arr. You build some sort of running total using an accumulator,a val that the reduce 
method maintains until the process is finished
*/
const numbers = [23, 255, 122, 5, 16, 99];

// to get total
// 0
// The second argument (0) sets starting value of the accumulator,
// if you don't set a starting val, the accumulator is automatically set to the first element
const total = numbers.reduce((acc, val) => acc + val, 0);
console.log(`Total: ${total}`); // 520

// to get a total squares
const totalSquares = numbers.reduce((acc, val) => acc + val ** 2, 0);
console.log(`Total of squares : ${totalSquares}`); // 90520

// to get average
const average = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
console.log(`Average: ${average}`); // 86.66666666666667

// const round = Math.round(average * 100);
// console.log(round / 100);

// to get Max or min from arr, Use Math.max(), Math.min()
// Math.max() takes separate arguments, not an arr, so spread the arr into it.
// Math.max([...numbers]) or Math.max(numbers) returns NaN - the arr is coerced to a single val
const maxVal = Math.max(...numbers);
console.log(`Max: ${maxVal}`); // 255

const minVal = Math.min(...numbers);
console.log(`Min: ${minVal}`); // 5

// for a very large arr the spread can blow the call stack (too many arguments),
// so use reduce() instead
const maxSafe = numbers.reduce((acc, val) => (val > acc ? val : acc));
console.log(`Max via reduce: ${maxSafe}`); // 255
