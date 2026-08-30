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

/* 
.splice()
The first argument in splice method is the index where the splicing starts.
this is the only argument you need to supply. 
If you leave out the other arr elements from the index to the end are removed:
*/
const aminalsA = ["cat", "walrus", "lion", "cat"];

// Start at lion and remove the rest of the elements
aminalsA.splice(2); // ["cat", "walrus",]

/* 
The optional second argument is the number of elements to remove.
The third argument is an optional set of the replacement elements to insert the same location.
*/
const animalsC = ["cat", "walrus", "lion", "cat"];
animalsC.splice(2, 1, "zebra", "elephant"); //[ 'cat', 'walrus', 'zebra', 'elephant', 'cat' ]
console.log(animalsC);
