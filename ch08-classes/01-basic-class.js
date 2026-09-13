//************* COMPENDIUM ********************* */
/*
You want to create a reusable template for custom objects.
*/
// Use class keyword
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  // This is a method
  swapName() {
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  }
  birthDate() {
    this.dateOfBirth = this.dateOfBirth.toDateString();
    return this.dateOfBirth;
  }
}
// Test the person class
const person = new Person("Mike", "Taison", new Date(1990, 5, 22));

person.swapName();

console.log(person.birthDate());
