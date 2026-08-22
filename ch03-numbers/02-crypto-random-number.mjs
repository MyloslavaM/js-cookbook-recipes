//************* COMPENDIUM ********************* */
/*
use window.crypto to get the instance of Crypto object
Crypto.getRandomValues()
You can choose whether these integers are 8-bit, 16-bit or 32-bit
 */
import { webcrypto as crypto } from "node:crypto";
// const crypto = require("crypto").webcrypto;
// Get the random fraction (0 < x < 1)

const randomFraction = () => {
  const randomBuffer = new Uint32Array(1); //This creates a typed array that can hold exactly 1 unsigned 32-bit integer. Uint32Array is a special array type built for raw binary data — each slot holds a whole number from 0 to 4,294,967,295 (that's 0xffffffff in hex). Right now, randomBuffer is just [0] — a container waiting to be filled.
  crypto.getRandomValues(randomBuffer); //This fills that container with a cryptographically secure random number. Instead of returning a new value, it mutates randomBuffer in place — it writes a random 32-bit integer directly into slot [0]. "Cryptographically secure" means the randomness comes from the OS's secure random number generator (not Math.random(), which is faster but more predictable and unsuitable for anything security-sensitive like tokens or keys).
  return randomBuffer[0] / (0xffffffff + 1); //This converts that random integer into a decimal fraction between 0 (inclusive) and 1 (exclusive)
};

// Use it to make a random integer in any range, the same way as with Math.random()
const randomNumber = (minimum, max) => {
  return Math.floor(randomFraction() * (max - minimum + 1)) + minimum;
};

console.log(randomNumber(1, 6));

export { randomFraction, randomNumber };
