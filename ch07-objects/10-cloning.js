//************* COMPENDIUM ********************* */
/*
You want to create an exact copy of a custom object.
*/
// Shallow clone
// Use spread (...) operator
const animal = {
  name: "Red Fox",
  class: "Mammalia",
  order: "Carnivora",
  family: "Canidae",
  genus: "Vulpes",
  species: "Vulpes vulpes",
  address: {
    country: "Canada",
    city: "Montreal",
    zipCode: 12390,
  },
};

const animalCopy = { ...animal };

console.log(`Testing simple clone: ${animalCopy.species}`); // 'Vulpes vulpes'

// Nested objects are copied by reference: The address property holds an object.
// Instead of creating a new independent address object,
// the spread operator copies the memory address (reference) pointing to the original address sub-object.
