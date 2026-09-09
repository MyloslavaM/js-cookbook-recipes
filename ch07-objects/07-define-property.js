//************* COMPENDIUM ********************* */
/*
Sometimes you need to explicitly customize your property so you have more control of how it's used
*/
// Instead of creating a property by assigning to it, use the
// Object.defineProperty() method to define it.
/*
Object.defineProperty(obj, prop, descriptor)
obj: The target object.
prop: A string or Symbol naming the property.
descriptor: An object configuration describing the property's flags and behavior. 
*/

const data = {};

Object.defineProperty(data, "type", {
  value: "primary",
  enumerable: true,
  //enumerable (Default: false):
  // If true, the property shows up during loops (for...in) and methods like Object.keys()
  //configurable (Default: false):
  // If true, the property type can be changed, its descriptor attributes can be modified, and the property can be deleted from the object.
});
// data.type = "wow";
// console.log(data.type); // TypeError: Cannot assign to read only property 'type' of object

Object.defineProperty(data, "id", {
  value: 1,
  writable: true,
  //value (Default: undefined): The actual value stored in the property.
  //writable (Default: false): If true, the property's value can be changed using an assignment operator.
});

for (const prop in data) {
  console.log(prop); // type, as id has enumerable: false
}
// Change this modifiable property
console.log(data.id); // 1
data.id = 5;
console.log(data.id); //5

// Create a calculated property
const person = {
  firstName: "Joe",
  lastName: "Khan",
  dateOfBirth: new Date(1996, 5, 12),
};
Object.defineProperty(person, "age", {
  configurable: true,
  enumerable: true,
  get: function get() {
    // Calculate the difference in years
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    // Adjust if the bithday hasn't happened yet this year
    const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())
    ) {
      age -= 1;
    }
    return age;
  },
});

console.log(person.dateOfBirth.toDateString());
console.log(person.age);
