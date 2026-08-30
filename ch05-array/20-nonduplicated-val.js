//************* COMPENDIUM ********************* */
/*
you want to create an arr like obj that never contains more than one copy of the same val
Set object
*/
// Starts with 6 elements
const animals = new Set(["elephant", "tiger", "lion", "zebra", "cat", "dog"]);
// Add two more
animals.add("rabbit");
animals.add("goose");
console.log(animals);
/*
Set(8) {
  'elephant',
  'tiger',
  'lion',
  'zebra',
  'cat',
  'dog',
  'rabbit',
  'goose'
}
*/
animals.add("tiger");
// Nothing happens, because this item is already in the Set

// Iterate over the set, just as you would with an arr
// for (const animal of animals) {
//   console.log(animal);
// }

// You can use add(), delete(), has() - to check if an item is in Set, clear()- to remove all, .size -
animals.delete("elephant");
console.log(animals); //Set(7) { 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit', 'goose' }

console.log(animals.has("zebra")); // true
console.log(animals.size); // 7
// const setToArr = [...animals];
// const arrToSet = new Set(setToArr);
console.log(animals.clear()); // undefined
