//************* COMPENDIUM ********************* */
/*
You want to add a uniquely named property to an object, 
and you want to be guaranteed that it won't clash with any other property name.
*/
const newObj = {};

// Set a unique property that will never clash with anything else
// A descriptive Symbol name is not necessary (it's primarily useful for
// identification while debugging), but ESLint rules require it

//The primary purpose of symbols is to serve as unique property keys for objects,
// preventing naming collisions even if different libraries or scripts add properties to the same object
const uniqueId = Symbol("dynamicProp1");
newObj[uniqueId] = "No two alike";

// Set another one
const anotherUniqueId = Symbol("dynamicProp2");
newObj[anotherUniqueId] = "This will not clash, either";

console.log(newObj);
