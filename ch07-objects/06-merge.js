//************* COMPENDIUM ********************* */
/*
You've created two simple obj, with properties, and you want to combine their data into a single obj
*/
// Use spread operator

const address = {
  country: "Australia",
  city: "Sydney",
  streetNum: 432,
  street: "Linkoln",
};

const customer = {
  firstName: "Lisa",
  lastName: "Batiasvily",
};

const customerWithAddress = { ...address, ...customer };
console.log(
  `${customerWithAddress.firstName} in ${customerWithAddress.country}`,
);
