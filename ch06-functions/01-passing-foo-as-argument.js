//************* COMPENDIUM ********************* */
/*
You're calling a foo that expects you to provide your own foo.
What's the best way to pass it? 
*/
// 1. Provide reference to a foo that already declared elsewhere in your code.
// If you want to use in other parts of your application.

// Runs when a button is clicked
function buttonClicked() {
  // Trigger the foo after 2000 milliseconds (2 sec)
  setTimeout(showMessage, 2000);
}
// Runs when setTimeout() triggers it
function showMessage() {
  alert(`You clicked the button 2 seconds ago`);
}
//===========================================
// 2. Declare the foo in a function expression, then pass it as an argument.
// Good if you don't plan to use foo anywhere else

function buttonClickedB() {
  // Declare foo expression to use with setTimeout
  const timeoutCallback = function showMessage() {
    alert(`You clicked the button 2 seconds ago`);
  };
  // Trigger the foo after 2000 milliseconds (2 sec)
  setTimeout(timeoutCallback, 2000);
}
//===========================================
// 3. Declare the foo inline, at the exact moment it's required -  when you pass it as an argument to another foo

function buttonClickedC() {
  // Trigger the foo after 2000 milliseconds (2 sec)
  setTimeout(function showMessage() {
    alert(`You clicked the button 2 seconds ago`);
  }, 2000);
}
