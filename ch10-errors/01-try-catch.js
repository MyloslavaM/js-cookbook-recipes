//************* COMPENDIUM ********************* */
/*
You are performing a task that may not succeed, 
and you don't want an error to interrupt your code or appear in the developer console.
*/
console.group("Basic try/catch/finally");
try {
  const uri = decodeURI("http%test");
  console.log(uri);
} catch (error) {
  console.log(error);
} finally {
  console.log("The operation (and any error handling) is complete");
}
console.groupEnd();
