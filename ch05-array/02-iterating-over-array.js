//************* COMPENDIUM ********************* */
/*
You want to use the best approach for looping over the every element in an array, in order
 */

// 1. Use for ... of - it doesn't allow you to modify the elements in arr you're traversing, which is safe, sensible approach
const animals = ["elephant", "tiger", "lion", "zebra", "cat", "dog", "rabbit"];
for (const animal of animals) {
  console.log(animal);
}

// 2. Use .forEach() for iterating in functional way
// this function is called ones each element in arr, and passed three potentially used parameters
// (element, element index, original arr)
animals.forEach(function (animal, index, array) {
  console.log(animal);
});
// Same with array foo
animals.forEach((animal) => console.log(animal));

// as for .. of is doesn't allow you to modify the elements
// one of the most flexible choices is a basic for loop with a counter
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
