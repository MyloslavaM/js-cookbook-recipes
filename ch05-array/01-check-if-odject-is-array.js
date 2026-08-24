//************* COMPENDIUM ********************* */
/*
Before you perform an array operation, you want to verify that your object truly is an array 
Array.isArray()
 */
const browserNames = ["Firefox", "Edge", "Chrome", "IE", "Safari"];
if (Array.isArray(browserNames)) {
  // We end up here, because browserNames is a valid array.
  console.log("browserNames is an array");
} else {
  console.log("browserNames is not an array");
}
