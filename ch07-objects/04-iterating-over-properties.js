//************* COMPENDIUM ********************* */
/*
You want to examine all the properties in an object
*/
// Use the static Object.keys() method to get any with the property names for your obj.
const address = {
  country: "Canada",
  city: "Toronto",
  streetNum: 433,
  streetName: "James Blvr",
};

// Object.keys() you retrieve all the property names (also known as keys).
// But you still need to look at corresponding value in the obj.
// You can use array like index syntax (object['propertyName'])

const properties = Object.keys(address); // [ 'country', 'city', 'streetNum', 'streetName' ]
// console.log(properties);
const values = Object.values(address); // [ 'Canada', 'Toronto', 433, 'James Blvr' ]
// console.log(values);

for (const property of properties) {
  console.log(`${address[property]}`);
}

for (const [key, value] of Object.entries(address)) {
  console.log(key, value);
}

// The Object.keys() method is also commonly used to count the number of properties of an obj
console.log(`The address obj has a length of ${properties.length}`); //4

for (const property in address) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "blue",
};
for (const [key, value] of Object.entries(car)) {
  console.log(`key: ${key}, value: ${value}`);
}
