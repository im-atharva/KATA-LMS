class Library {
  constructor() {
    this.books = [];
  }
  // function to add new book to library
  addBook(book) {
    this.books.push({ ...book, available: true });
  }

  // function to get all available books
  getAvailableBooks() {
    const bookList = this.books.filter((book) => book.available);
    if (bookList.length === 0) {
      return "No Books are currently Available";
    }
    return bookList;
  }

  // function to borrow books
  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn && b.available); //find the book with given isbn
    if (!book) throw new Error("Book is not Available!");
    book.available = false;
  }

  //function to return borrowed books
  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn && !b.available);
    if (!book) throw new Error("Book not borrowed");
    book.available = true;
  }

  getBook(title) {
    const book = this.books.find((b) => b.title === title && b.available);
    if (!book) throw new Error("Book not available");
    return book.title;
  }
}

module.exports = Library;
