const createAuthor = require('./Author/create')
const updateAuthor = require('./Author/update')
const deleteAuthor = require('./Author/delete')
const createBook = require('./Book/create')
const updateBook = require('./Book/update')
const deleteBook = require('./Book/delete')
const createPublisher = require('./Publisher/create')
const updatePublisher = require('./Publisher/update')
const deletePublisher = require('./Publisher/delete')

module.exports = { createAuthor, updateAuthor, deleteAuthor, createBook, updateBook, deleteBook, createPublisher, updatePublisher, deletePublisher }




// const Author = require('./Author');
// const Publisher = require('./Publisher');
// const Book = require('./Book');


// module.exports = {Book, Publisher, Author};