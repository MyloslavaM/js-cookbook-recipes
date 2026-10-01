//************* COMPENDIUM ********************* */
/*
You want to indicate a specific error condition by throwing a custom error object. 
*/
// A custom error class that represents a special error condition
// Create a class that inherits from the standard Error class; the constructor should accept the descriptive text for
// the message property, and use super() to call the base Error class constructor with the message. Here's a bare minimum
// custom error, with the code that throw it:
class ProductNotFound extends Error {
  constructor(missingProductID, message) {
    super(message);
    this.name = "ProductNotFound";
    this.productID = missingProductID;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProductNotFound);
    }
  }
}

// Catch an instance of the custom error
try {
  throw new ProductNotFound(420, `ProductID does not exist in the catalog.`);
} catch (error) {
  console.log(`An error occured with the message: ${error.message}`);
  if (error instanceof ProductNotFound) {
    console.log(`Missing: ${error.productID}`);
  }
}
