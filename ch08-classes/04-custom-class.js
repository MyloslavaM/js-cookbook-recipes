//************* COMPENDIUM ********************* */
/*
You want to create a reusable, class-like entity in your code. 
You want to use traditional constructor pattern because it matches your existing code.
*/
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.swapNames = function () {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  };
}

// Create a person
const person = new Person("Bob", "Ailish");
console.log(person.firstName); // Bob
person.swapNames();
console.log(person.firstName); // Ailish
