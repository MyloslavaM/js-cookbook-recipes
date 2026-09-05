//************* COMPENDIUM ********************* */
/*
You want to create a foo that can remember data, but without having to use global var and 
without replacing the same data with each foo call
*/
function* generateValues() {
  yield `894598`;
  yield `This is the second value`;
  yield 5;
  return `This is the end`;
}

const generator = generateValues();

console.log(generator.next().value); //894598
console.log(generator.next().value); // This is the second value
console.log(generator.next().value); // 5
console.log(generator.next().value); // This is the end
console.log(generator.next().value); // undefined
