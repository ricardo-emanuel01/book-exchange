const express = require('express');

const authentication = require('../middleware/authentication');
const validateSchema = require('../middleware/validateSchema');

const signUpSchema = require('../schema/signUpSchema.js');
const signInSchema = require('../schema/signInSchema.js');
const bookSchema = require('../schema/bookSchema');
const putBookSchema = require('../schema/putBookSchema');

const signUp = require('../controllers/user/signup/signup');
const signIn = require('../controllers/user/signin/signin.js');

const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const putUserController = require('../controllers/user/putUser.js');

const postBook = require('../controllers/book/postBook');
const getBook = require('../controllers/book/getBook');
const getBooksController = require('../controllers/book/bookList.js');
const putBook = require('../controllers/book/putBook');

const route = express();

route.post('/signup', validateSchema(signUpSchema), signUp); //ok
route.post("/signin", validateSchema(signInSchema), signIn); //ok

route.use(authentication);

route.get('/user', getUser);
route.delete('/user', deleteUser);
route.put('/user', putUserController);

route.get('/books', getBooksController);
route.post('/book', validateSchema(bookSchema), postBook);
route.get('/book/:id', getBook);
route.put('/book/:id', validateSchema(putBookSchema), putBook);












module.exports = route 
