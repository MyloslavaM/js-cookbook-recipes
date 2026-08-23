//************* COMPENDIUM ********************* */
/*
for splitting the string and getting data use string methods split(), slice(), indexOf()
string.split(separator, limit) - 
separator (Optional): The character, string, or regular expression that determines where the split happens.
limit (Optional): A non-negative integer specifying the maximum number of substrings to include in the array
*/
const stringDate = "12/20/2030";
const array = stringDate.split("/");
const day = array[1];
const year = array[2];
const month = array[0];
const eventDate = new Date(year, month - 1, day);
console.log(eventDate.toDateString());

/*
If you attempt tp create a Date object with a nonnumeric string, 
you will receive an 'invalid date' object.
For test you can use isNaN()
*/
const badDate = "12 Bananas";
const convertedDate = new Date(badDate);
console.log(convertedDate); // Invalid Date

console.log(Number.isNaN(convertedDate)); // false
if (Number.isNaN(convertedDate)) {
  //We end up here, because the date object was not created sucessfully
} else {
  // for a valid Data instance, we end up here
}
