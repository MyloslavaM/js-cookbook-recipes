//************* COMPENDIUM ********************* */
/*
You want to determine if an obj is empty
*/
//Use, Object.keys() and get length of 0
const blankObject = {};
if (Object.keys(blankObject).length === 0) {
  // this code runs
}

const objectWithProperty = { price: 12345 };
if (Object.keys(objectWithProperty).length === 0) {
  // fail, this code won't run, as length is 1
}
