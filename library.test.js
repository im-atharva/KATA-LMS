const Library = require("./library");

describe("Library Management System", () => {
  let library;

  beforeEach(() => {
    //setting new library instance before each test
    library = new Library();
  });

  //test to add book in library
  test("should add a book to the library", () => {
    library.addBook({
      isbn: "100703",
      title: "The Daily Stoic",
      author: "Ryan Holiday",
      year: 1925,
    });

    expect(library.getAvailableBooks().length).toBe(1);
    expect(library.getAvailableBooks()[0].isbn).toBe("100703");
    expect(library.getAvailableBooks()[0].title).toBe("The Daily Stoic");
    expect(library.getAvailableBooks()[0].author).toBe("Ryan Holiday");
  });

  //test to borrow books
  test("should allow borrowing a available book", () => {
    library.addBook({
      isbn: "100703",
      title: "The Daily Stoic",
      author: "Ryan Holiday",
      year: 1925,
    });
    library.borrowBook("100703");
    expect(library.getAvailableBooks().length).toBe(0);
  });

  test("should throw an error if the book is not available", () => {
    library.addBook({
      isbn: "12345",
      title: "Atomic Habits",
      author: "James Clear",
      year: 2002,
      available: false, //must throw the error
    });
    library.borrowBook("12345");
    expect(() => library.borrowBook("12345")).toThrow("Book is not Available!");
  });

  // test to borrow book
  test("should allow returning borrowed books", () => {
    library.addBook({
      isbn: "12345",
      title: "Atomic Habits",
      author: "James Clear",
      year: 2002,
    });
    library.borrowBook("12345");
    library.returnBook("12345");
    expect(library.getAvailableBooks().length).toBe(1);
    expect(library.getAvailableBooks()[0].isbn).toBe("12345");
  });

  test("should throw an error if trying to return a book that was not borrowed", () => {
    library.addBook({
      isbn: "12345",
      title: "Atomic Habits",
      author: "James Clear",
      year: 2002,
    });

    expect(() => library.returnBook("12345")).toThrow("Book not borrowed");
  });
});
