//************* COMPENDIUM ********************* */
/*
You have a mystery object and you want to determine its type
*/

// use instanceof operator works by inspecting an obj prototype chain,
// Depending on how an obj is constructed , there can be several types in the prototype chain.
// For example, every obj has the object prototype at the base of its chain, so this is always true
const mysteryPrimitive = 42;
const mysteryObject = new Date();

if (typeof mysteryPrimitive === "number") {
  console.log("mysteryPrimitive is a number");
}

if (typeof mysteryObject === "object") {
  // This code runs, because a Date is an object, not a primitive
  console.log("mysteryObject is an object");
}

if (mysteryObject instanceof Date) {
  // This code also runs
  console.log("mysteryObject is a Date");
}
