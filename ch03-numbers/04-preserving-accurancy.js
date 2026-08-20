//************* COMPENDIUM ********************* */
/*
All numbers in JS atr floating values.
ex. 0.1 + 02 = 0.30000000000000004
use toFix(1) return String and bad for Mathematical calculation - it is better to avoid
*/
console.log(0.1 + 0.2);
/*
It is better to use currency variables like this
*/
const currentBalance = 538223;
const transactionAmount = 1402;

function updateBalance(currentBalance, transactionAmount) {
  return currentBalance - transactionAmount;
}
console.log(updateBalance(currentBalance, transactionAmount));

/*
It case you need calculate tax or interest
ex. Calculate 11% tax, and round result to the nearest cent
*/
const costIncents = 4899;
const costWithTax = Math.round(costIncents * 1.11);
console.log(costWithTax);

/*
For adding tax to the sum
*/
const priceWithTaxInCents = 23455; // e.g. $234.55
const taxRate = 0.11;

const originalPriceInCents = Math.round(priceWithTaxInCents / (1 + taxRate));
const taxInCents = priceWithTaxInCents - originalPriceInCents;

console.log(originalPriceInCents); // 21131
console.log(taxInCents); // 2324
