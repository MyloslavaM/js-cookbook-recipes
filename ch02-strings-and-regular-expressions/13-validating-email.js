//************* COMPENDIUM ********************* */
/*
Use regEx.test() method
 */
const emailValid = "test@gmail.com";
const emailInvalid = "test@gmail .com";
const regex = /\S+@\S+\.\S+/;

if (regex.test(emailValid)) {
  console.log(`Email is valid`);
}
if (!regex.test(emailInvalid)) {
  console.log(`Email invalid`);
}
