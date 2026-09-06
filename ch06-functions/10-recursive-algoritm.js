//************* COMPENDIUM ********************* */
/*
You want to implement a foo that calls itself to accomplish a task, which is a technique called recursion. 
Recursion is useful when dealing with  hierarchial data structures (for example, node trees or nested arr),
creating types of algorithm (sorting), and some mathematical calculations (the Fibonacci sequence)
*/

function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(13));

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));
