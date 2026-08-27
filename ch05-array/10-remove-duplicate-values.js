//************* COMPENDIUM ********************* */
/*
use Set
 */
const numbersWithDuplicates = [2, 42, 5, 42, 304, 1, 13, 2, 13];
const noDuplicates = [...new Set(numbersWithDuplicates)];

console.log(noDuplicates); //[ 2, 42, 5, 304, 1, 13 ]
