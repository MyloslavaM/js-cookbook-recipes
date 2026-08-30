//************* COMPENDIUM ********************* */
/*
you want to sort an arr that contains objects, based on one of its property 
Use Array.sort()
The Array.sort() method recorders an arr. For example,it arranges an arr of numbers from smallest, or it puts an arr of str
in alphabetical order .
You can also pass a comparison foo to the sort() method.
*/
const people = [
  { firstName: "Joe", lastName: "Khan", age: 21 },
  { firstName: "Dorian", lastName: "Khu", age: 15 },
  { firstName: "Tammy", lastName: "Smith", age: 41 },
  { firstName: "Noor", lastName: "Biles", age: 33 },
  { firstName: "Sumatva", lastName: "Chen", age: 19 },
];

// Sort by lastName
// The localeCompare() method compares two strings in the current locale (language settings)
// and returns a number indicating their sort order.
const peopleLastNameSorted = [...people];
peopleLastNameSorted.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log(peopleLastNameSorted);

// Sort by age

const peopleAgeSorted = [...people];
peopleAgeSorted.sort((a, b) => a.age - b.age);
// console.log(peopleAgeSorted);
