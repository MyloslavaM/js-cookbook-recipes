//************* COMPENDIUM ********************* */
/*
Instead of creating a promise chain, 
you want to write linear logic that's easier to read and looks more like synchronous code.
*/
// Don't call Promise.then(). Instead use await keyword on your promise
async function getImage() {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";
  // Wait (asynchronously) for the response
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const blob = await response.blob();
    // Now show the image
    const img = document.getElementById("imgDownload");
    img.src = URL.createObjectURL(blob);
  } catch (error) {
    console.log("Network or parsing error:", error);
  }
}

function downloadImage() {
  getImage().then(() => {
    console.log("All asynchronous steps completed");
  });
}
document.getElementById("startCall").addEventListener("click", downloadImage);
