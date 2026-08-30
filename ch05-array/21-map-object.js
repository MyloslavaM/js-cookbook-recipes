//************* COMPENDIUM ********************* */
/*
you want to create a collection where each item is labeled with a unique string key
use Map object
Each Object with a unique key(usually, but not necessarily, a string).
To add an item, you can set() method.
When you need to retrieve a specific item, you can grab exactly the item you want by using the key: 
methids: set(), get(), has(), delete() 
*/
const products = new Map();
// Add three items
products.set("RU007", { name: "Rain Racer 2000", price: 1499.99 });
products.set("STKY1", { name: "Edible Tape", price: 3.99 });
products.set("P38", { name: "Escape Vehicle (Air)", price: 2999.0 });

//Check for two items
console.log(products.has("RU007")); // true
console.log(products.has("RU157")); // false

//Retrieve an item, use get()
const product = products.get("P38");
if (typeof product !== "undefined") {
  console.log(product.price); // 2999
}
// Remove the editable Tape item
products.delete("STKY1");
console.log(products.size); // 2

// Convert to arr Array.from()
const productsArr = Array.from(products);

// Each element in productsArr is a separate arr with two elements
// The first el is the key (like 'RU007')
// The second is the val the (product obj)

console.log(productsArr[0]); // [ 'RU007', { name: 'Rain Racer 2000', price: 1499.99 } ]

// If you don't need to keep key for arrays
const productsArr2 = Array.from(products, ([name, value]) => value);
console.log(productsArr2[0]); //{ name: 'Rain Racer 2000', price: 1499.99 }
