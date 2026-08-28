//************* COMPENDIUM ********************* */
/*
you want to flatten s two-dimensional arr to that it becomes a one-dimensional lit
use Array.flat() method
*/
const fruitArray = [];
//Add three elements to fruitArray
//Each element is an array of strings
fruitArray[0] = ["strawberry", "blueberry", "raspberry"];
fruitArray[1] = ["lime", "lemon", "orange", "grapefruit"];
fruitArray[2] = ["tangerine", "apricot", "peach", "plum"];

console.log(fruitArray);
/*
[
  [ 'strawberry', 'blueberry', 'raspberry' ],
  [ 'lime', 'lemon', 'orange', 'grapefruit' ],
  [ 'tangerine', 'apricot', 'peach', 'plum' ]
]
*/
console.log(fruitArray.flat());
/*
[
  'strawberry', 'blueberry', 'raspberry',  'lime','lemon', 'orange', 'grapefruit', 'tangerine', 'apricot','peach','plum'
]
*/
