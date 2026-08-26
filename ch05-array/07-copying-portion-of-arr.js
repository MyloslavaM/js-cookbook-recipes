//************* COMPENDIUM ********************* */
/*
You want to copy a portion of arr, and keep the original array intact
use Array.slice() method, 
which makes a shallow copy of a portion of an existing array, and returns that as a new array.
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
// Get chunk from index 4to index 7
const domestic = animals.slice(4, 7);
console.log(`Domestic: ${domestic}`);

// calling slice(0) on array copies the whole array!!!
// Put a new animal in the middle
const firstHalf = animals.slice(0, 3); //["elephant", "tiger", "emu",]
const secondHalf = animals.slice(4, 7); //[ 'cat', 'dog', 'rabbit' ]

const extractAnimals = [...firstHalf, "emu", "platypus,", ...secondHalf];
console.log(extractAnimals);

// You can use it with finIndex() method where you should to find an arr
