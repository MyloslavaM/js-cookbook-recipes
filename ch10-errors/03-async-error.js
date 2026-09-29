//************* COMPENDIUM ********************* */
/*
You want to add error handling but the risky operation is performed on a background thread.
*/
//then(),catch() example
fetch("http://noserver")
  .then((responce) => {
    console.log("We did it,fam");
  })
  .catch((error) => {
    console.log(error);
  });

// try{}.catch()
async function doWork() {
  try {
    const responce = await fetch("http://noserver");
  } catch (error) {
    console.log(error);
  }
}
doWork().then(() => {
  console.log("All done");
});
