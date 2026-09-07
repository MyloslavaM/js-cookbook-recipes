//************* COMPENDIUM ********************* */
/*
You want to group variables together to create a basic data package.
*/

// Use object literal
const employee = {
  employeeId: 402,
  firstName: "Lisa",
  lastName: "Stanecki",
  birthDate: new Date(1995, 8, 15),
};
// get access to properties
console.log(employee.birthDate);
// add new properties
employee.role = "Manager";

// You can add also object val
employee.address = { country: "Canada", city: "Toronto" };

console.log(employee);
/*
{
  employeeId: 402,
  firstName: 'Lisa',
  lastName: 'Stanecki',
  birthDate: 1995-09-14T21:00:00.000Z,
  role: 'Manager',
  address: { country: 'Canada', city: 'Toronto' }
}
*/
