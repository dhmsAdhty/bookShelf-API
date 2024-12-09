const { addbooks, getAllBooks, getBookId, updateBook, deleteBook } = require('./handler');

const routes =[
  {
    method : 'POST',
    path: '/books',
    handler:addbooks
  },
  {
    method : 'GET',
    path: '/books',
    handler: getAllBooks
  },
  {
    method : 'GET',
    path: '/books/{bookId}',
    handler: getBookId
  },
  {
    method : 'PUT',
    path: '/books/{bookId}',
    handler: updateBook
  },
  {
    method : 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook
  }
];

module.exports = routes;