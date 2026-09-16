//************* COMPENDIUM ********************* */
/*
You want to define your class methods in such a way that several methods can be called in quick succession, 
in a single element.
*/
// Example of a custom Book obj with two methods,
// raisePrice() and releaseNewEdition(), doth use method chaining.

class Book {
  constructor(title, author, price, publishedDate) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishedDate = publishedDate;
  }
  raisePrice(percent) {
    const increase = this.price * percent;
    this.price += Math.round(increase) / 100;
    return this;
  }
  releaseNewEdition() {
    // Set the pulishedDate to today
    this.publishedDate = new Date();
    return this;
  }
}

const book = new Book(
  "I Love Mathematics",
  "Adam Up",
  15.99,
  new Date(2010, 2, 2),
);
console.log(book.raisePrice(20));

// Raise the price 15% and then change the edition, using method chaining
console.log(book.raisePrice(15).releaseNewEdition());
