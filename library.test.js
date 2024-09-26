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
});
