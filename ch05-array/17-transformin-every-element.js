//************* COMPENDIUM ********************* */
/*
you want to convert every element in arr using the same transformation, and use the changed values to build a new arr.
Use .map()
The map() method goes through the entire arr., applying your foo to each element and building a new arr with the return val
*/
const decArr = [23, 255, 122, 5, 16, 99, 1, 10];

// Use the toString() method to convert to base-16 values
const hexArray = decArr.map((number) => number.toString(16));
console.log(hexArray);
