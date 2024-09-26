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
    return this.books.filter((book) => book.available);
  }
}

module.exports = Library;
