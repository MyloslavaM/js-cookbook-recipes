//************* COMPENDIUM ********************* */
/*
You want to create a foo that can remember data, but without having to use global var and 
without replacing the same data with each foo call
*/
function greetingMarker(greeting) {
  function addName(name) {
    return `${greeting} ${name}`;
  }
  return addName;
}

// Use the outer function to create two copies of the inner function,
// each with a different value for greeting
const daytimeGreeting = greetingMarker("Good Day to you");
const nightGreeting = greetingMarker("Good Evening");

console.log(daytimeGreeting("Peter")); // Good Day to you Peter
console.log(nightGreeting("Sally")); // Good Evening Sally
//=================================
// The same closure written with arr foo. One => per step,
// so you need one pair of parentheses per arrow when calling it.

const makeGreeting = (greeting) => (name) => `${greeting} ${name}`;

const morningGreeting = makeGreeting("Good Morning");
console.log(morningGreeting("Peter")); // Good Morning Peter

// Both pairs of parentheses at once: the 1st call returns the foo,
// the 2nd one runs it. Valid, but pointless on its own - it's the same as
// a plain foo with two params. A closure pays off only when you KEEP
// the middle foo and reuse it later.
console.log(makeGreeting("Good Night")("Sally")); // Good Night Sally
//=================================
// Keeping the middle foo: configure once, call as many times as you need.
// Each logger remembers its own level and never sees the other one's.

function makeLogger(level) {
  return function log(message) {
    return `[${level}] ${message}`;
  };
}

const logError = makeLogger("ERROR");
const logInfo = makeLogger("INFO");

console.log(logError("File not found")); // [ERROR] File not found
console.log(logError("Access denied")); // [ERROR] Access denied
console.log(logInfo("Done")); // [INFO] Done
//=================================
// The 2nd pair of parentheses doesn't have to be yours, and doesn't have to
// happen now. Here we make only the 1st call - setTimeout makes the 2nd one
// later. By then the outer foo has long finished, but `color` is still there,
// because the returned foo carries it along.

function makeColorHandler(color) {
  return function setBackground() {
    console.log(`Background set to ${color}`);
  };
}

setTimeout(makeColorHandler("red"), 1000); // Background set to red
setTimeout(makeColorHandler("blue"), 2000); // Background set to blue
//         ^^^^^^^^^^^^^^^^^^^^^^ only this call is ours

// Same idea in the browser, with a real event instead of a timer:
// btnRed.addEventListener("click", makeColorHandler("red"));
// btnBlue.addEventListener("click", makeColorHandler("blue"));
