//************* COMPENDIUM ********************* */
/*
You want to create a method that generates a preconfigured object,
possibly to get around JS single-constructor limitation.
*/
// Add a static method to your class that creates and returns the obj you want.
class Book {
  constructor(title, firsName, lastName) {
    this.title = title;
    this.firsName = firsName;
    this.lastName = lastName;
  }
  static createSequel(prevBook, title) {
    return new Book(title, prevBook.firsName, prevBook.lastName);
  }
}

/* How to use:
1. Create a Book with the usual constructor
2. Create a sequel with the static method
*/
const book = new Book("Good Design", "Polly", "Morfissim");
const sequel = Book.createSequel(book, "Even Golder Design");

console.log(sequel);
// ==================================================
// create a Book.createTrilogy() method to get an arr of three Book obj.
class Author {
  constructor(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
  }
}
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  static createSequel(prevBook, title) {
    return new Book(title, prevBook.author);
  }
  static createTrilogy(author, title1, title2, title3) {
    return [
      new Book(title1, author),
      new Book(title2, author),
      new Book(title3, author),
    ];
  }
}
// create a trilogy
const author = new Author("Koh", "Der");
const books = Book.createTrilogy(
  author,
  "A Sea of Fire",
  "A Sea of Ice",
  "A Sea of Water",
);

console.log(books);
