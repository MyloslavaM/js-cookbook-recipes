//************* COMPENDIUM ********************* */
/*
You want to run code when certain actions take place with object, but you don't want to put your code inside the obj.
*/
//Proxy class, allows you intercept a variety of different actions on any obj.
// This is obj that you we'll watch with the proxy.
const product = { name: "banana" };

//This is the handler that the proxy uses to intercept traps
const propertyChecker = {
  set: function set(target, property, value) {
    if (property === "price") {
      if (typeof value !== "number") {
        throw new TypeError("price is not a number");
      } else if (value <= 0) {
        throw new RangeError("price must be greater that zero");
      }
    } else if (property !== "name") {
      throw new ReferenceError(`property '${property}' not valid`);
    }
    target[property] = value;
    return true;
  },
};
const proxy = new Proxy(product, propertyChecker);

console.log((proxy.name = "iPhone"));

// Now, modify the product object through the proxy object
proxy.name = "apple";
console.log("Changed product name through proxy");

// This is allowed
proxy.price = 14.99;
console.log("Changed product price through proxy");

console.log(product);

console.log("Attempting to set invalid product.price value");

// // This will throw a RangeError
// proxy.price = -1.0;

// This will throws a TypeError
// proxy.price = "three dollars";

// This will throw a ReferenceError
// proxy.type = "red delicious";

// This will bypass the proxy and succeed
// product.price = -1.0;
