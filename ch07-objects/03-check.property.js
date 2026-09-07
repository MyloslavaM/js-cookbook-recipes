//************* COMPENDIUM ********************* */
/*
You want to check at runtime if an obj has a given property
*/
// Use in operator to look for a property by name

const address = {
  country: "Australia",
  city: "Sydney",
  streetNum: "412",
  streetName: "Worcestire Blvr",
};

if ("country" in address) {
  console.log(address.country);
}
if ("zipCode" in address) {
  console.log(address.zipCode); // not run, no such property
}

console.log(address.hasOwnProperty("country")); // true
console.log(address.hasOwnProperty("zipCode")); // false
