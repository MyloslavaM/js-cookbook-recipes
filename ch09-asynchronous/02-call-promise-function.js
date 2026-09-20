//************* COMPENDIUM ********************* */
/*
You want to run code when an async task completes (successfully or unsuccessfully).
You want to be notified about task completion through a Promise object. 
*/
// A Promise is an object that helps you manage an asynchronous tasks.
// It tracks the status of the task and - most importantly - handles the callbacks that notify your code
// when the task succeeds or fails.
function downloadImage() {
  fetch(
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg",
  )
    .then((response) => {
      console.log("First promise finished; starting second promise");
      return response.blob();
    })
    .then((blob) => {
      console.log("Second promise finished; copying image data into the page");
      const img = document.getElementById("imgDownload");
      img.src = URL.createObjectURL(blob);
    });
}

function downloadImageWithErrorHandling() {
  fetch(
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg",
  )
    .then((response) => {
      if (!response.ok) {
        // Ordinarily, it's not an error if the server responds to our request
        // Now, let's treat any response other than HTTP 200 OK as an error
        throw new Error(`HTTP code: ${response.status}`);
      } else {
        console.log("First promise finished; starting second promise");
        return response.blob();
      }
    })
    .then((blob) => {
      console.log("Second promise finished; copying image data into the page");
      const img = document.getElementById("imgDownload");
      img.src = URL.createObjectURL(blob);
    })
    .catch(() => {
      console.log("An error occurred in the first or second promise");
    });
}

document.getElementById("startCall").addEventListener("click", downloadImage);
document
  .getElementById("startCall_ErrorHandling")
  .addEventListener("click", downloadImageWithErrorHandling);
