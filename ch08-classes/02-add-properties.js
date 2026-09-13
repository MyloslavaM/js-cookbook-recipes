//************* COMPENDIUM ********************* */
/*
You want to add property getters and setters to wrap your class data.
*/
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  get age() {
    if (!(this.dateOfBirth instanceof Date)) {
      throw new TypeError("The dateOfBirth is not a valid date");
    }
    // Calculate difference in in years
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    // Adjust if the bithday hasn't happened yet this year
    const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())
    ) {
      age = -1;
    }
    return age;
  }
}
const person = new Person("Lisa", "Batiashwily", new Date(1976, 5, 2));
console.log(person.age);
console.log("Test the Person.age property");
const newPerson = new Person("Luke", "Takei", new Date(1991, 5, 22));
console.log(newPerson.age);
