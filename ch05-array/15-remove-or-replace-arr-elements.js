//************* COMPENDIUM ********************* */
/*
you want to find occurrences of given value iin ian array, and either remove the element or replace it.
*/
const animals = ["dog", "cat", "seal", "walrus", "lion", "cat"];
//1. find index of the item you want to remove using indexOf()
const walrusIndex = animals.indexOf("walrus"); //3
console.log(walrusIndex);

//2. Join the portion before 'walrus', to the portion after 'walrus'
const animalSliced = [
  ...animals.slice(0, walrusIndex),
  ...animals.slice(walrusIndex + 1),
];
console.log(animalSliced); // [ 'dog', 'cat', 'seal', 'lion', 'cat' ]

//=====================
//You can also use splice() method
//1. find where the 'walrus' item is
//2. Starting at walrusIndex, remove 1 element
animals.splice(walrusIndex, 1);

console.log(animals); //[ 'dog', 'cat', 'seal', 'lion', 'cat' ]
