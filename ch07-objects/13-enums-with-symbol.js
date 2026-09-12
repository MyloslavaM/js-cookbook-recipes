//************* COMPENDIUM ********************* */
/*
You want to store a small, related group of constants, so you can refer to them by name in your code.
*/

// Create three constant to use as an enum
const TrafficLight = {
  Green: Symbol("green"),
  Red: Symbol("red"),
  Yellow: Symbol("yellow"),
};

// This foo uses the light enum
function switchLight(newLight) {
  if (newLight === TrafficLight.Green) {
    console.log("Turning light green");
  } else if (newLight === TrafficLight.Yellow) {
    console.log("Get ready to stop");
  } else {
    console.log("Turning light red");
  }
  return newLight;
}
let light = TrafficLight.Green;
light = switchLight(TrafficLight.Yellow);
light = switchLight(TrafficLight.Red);

console.log(light);
