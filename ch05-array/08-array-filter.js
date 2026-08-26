//************* COMPENDIUM ********************* */
/*
You want to find all the items in an arr that match a certain condition, and copy them in a new arr
use Array.filter() method, to run a tes on every item
 */
const animals = [
  "elephant",
  "tiger",
  "emu",
  "zebra",
  "cat",
  "dog",
  "rabbit",
  "eel",
  "goose",
  "earwig",
];

function startWithE(animal) {
  return animal[0].toLowerCase() === "e";
}
console.log(startWithE("elephant")); // true
console.log(startWithE("goose")); // false
const animalsE = animals.filter(startWithE); //[ 'elephant', 'emu', 'eel', 'earwig' ]

console.log(animalsE);

// More short way to filter
const filtered = animals.filter((animal) => animal[0].toLowerCase() === "e");
console.log(filtered);
