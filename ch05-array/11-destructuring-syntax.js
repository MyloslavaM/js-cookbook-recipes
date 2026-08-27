//************* COMPENDIUM ********************* */
/*
You need to assign array element values to several variables, but you want a convenient approach
that doesn't force you to assign each variable separately
 */
const stateValues = [459, 144, 96, 34, 0, 14];
const [arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;

console.log(missouri); // 144
// In this example, that means arizona gets the first value in the arr,  missouri the second ...
// If you have more variables than arr elements, the extra var get the val undefined
