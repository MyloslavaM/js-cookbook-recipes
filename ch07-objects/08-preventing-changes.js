//************* COMPENDIUM ********************* */
/*
You've defined your object, and now you want to make sure that its properties aren't redefined or edited by other code.
*/
// Use Object.freeze() to freeze obj against any and all changes
const customer = {
  firstName: "Josephine",
  lastName: "Stanecki",
};

customer.firstName = "Homer";
console.log(customer); // { firstName: 'Homer', lastName: 'Stanecki' }
// freeze obj
Object.freeze(customer);

try {
  customer.firstName = "Ivan";
} catch (error) {
  console.warn("⚠️ You cannot change properties on a frozen object!");
  console.log(error.message); //TypeError: Cannot assign to read only property 'firstName' of object
}

console.log(customer); //{ firstName: 'Homer', lastName: 'Stanecki' }

/*
You have three choices

1. Object.preventExtensions()
Prevent you form adding new properties. However you can still set property values.
You can also delete properties and configure properties with Object.getOwnPropertyDescriptor()

2. Object.seal()
Prevents properties form being added, removed, or configured. However, you can still set property values.

3. Object.freeze()
Disallow property modifications of any kind.
*/
