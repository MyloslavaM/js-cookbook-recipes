//************* COMPENDIUM ********************* */
/*
You want to execute multiple promises at the same time, 
and react once all the promises have finished their work.
*/
// Use static Promise.all() to combine multiple promises into a single promise.
// And wait for them all to resolve successfully (or for one of them fail)
function randomWaitPromise() {
  return new Promise((resolve) => {
    // Decide how long to wait
    const waitMilliseconds = Math.round(Math.random() * 10_000);
    // simulate an synchronous task with setTimeout()
    setTimeout(() => {
      console.log(`Resolved after ${waitMilliseconds}`);
      resolve(waitMilliseconds);
    }, waitMilliseconds);
  });
}

// create three promises
console.log("About to create 3 promises");
const promise1 = randomWaitPromise();
const promise2 = randomWaitPromise();
const promise3 = randomWaitPromise();
const promises = [promise1, promise2, promise3];
console.log("Finished creating promises; now we wait...");

// Wait for all of them log the result
Promise.all(promises).then((values) => {
  console.log(`All done with: ${values}`);
});
