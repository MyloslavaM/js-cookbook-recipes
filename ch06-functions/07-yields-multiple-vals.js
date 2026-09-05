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

//Same for destructuring, Array.from(), and yield*-driven loops.
// Rule of thumb: yield is for values you want the consumer to iterate over;
// return is for a "here's the final result" value that only manual next() — or yield* — can see.

console.log(generator.next().value); //894598
console.log(generator.next().value); // This is the second value
console.log(generator.next().value); // 5
console.log(generator.next().value); // This is the end
console.log(generator.next().value); // undefined

// for ... of loop working good with this foo
for (const value of generateValues()) {
  console.log(value); // 894598   This is the second value  5
}

// With spread syntax, you can dump everything in one step

const values = [...generateValues()]; // [ '894598', 'This is the second value', 5 ]
console.log(values);
