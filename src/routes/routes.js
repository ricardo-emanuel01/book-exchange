const express = require('express');
const prisma = require('../prisma/client');

const validateSchema = require('../middleware/validateSchema');
const userSchema = require('../schema/userSchema');
const bookSchema = require('../schema/bookSchema');
const putBookSchema = require('../schema/putBookSchema');

const signUp = require('../controllers/user/signup/signup');
const signin = require('../controllers/user/signin/signin.js');

const authentication = require('../middleware/authentication');

const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const putUserController = require('../controllers/user/putUser.js');
const postBook = require('../controllers/book/postBook');
const getBook = require('../controllers/book/getBook');
const getBooksController = require('../controllers/book/bookList.js');
const putBook = require('../controllers/book/putBook');

const route = express();

route.post('/signup', validateSchema(userSchema), signUp);
route.post("/signin", signin);

route.use(authentication);

route.get('/user', getUser);
route.delete('/user', deleteUser);
route.put('/user', putUserController);

route.get('/books', getBooksController);
route.post('/book', validateSchema(bookSchema), postBook);
route.get('/book/:id', getBook);
route.put('/book/:id', validateSchema(putBookSchema), putBook);












module.exports = route 
