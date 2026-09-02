//************* COMPENDIUM ********************* */
/*
You want to specify default val for a parameter, 
which will be used if the caller doesn't pass in an argument when calling the foo
*/
function addNumbers(firstNum, secondNum, thirdNum = 0) {
  return firstNum + secondNum + thirdNum;
}
console.log(addNumbers(42, 6, 10)); // 58
console.log(addNumbers(42, 6)); // 48
