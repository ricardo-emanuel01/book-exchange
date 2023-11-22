const express = require('express');

const authentication = require('../middleware/authentication');
const validateSchema = require('../middleware/validateSchema');

const signUpSchema = require('../schema/signUpSchema.js');
const signInSchema = require('../schema/signInSchema.js');
const postBookSchema = require('../schema/postBookSchema.js');
const putBookSchema = require('../schema/putBookSchema');
const putUserSchema = require('../schema/putUserSchema.js');

const signUp = require('../controllers/user/signup/signup');
const signIn = require('../controllers/user/signin/signin.js');

const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const putUser = require('../controllers/user/putUser.js');

const postBook = require('../controllers/book/postBook');
const getBook = require('../controllers/book/getBook');
const putBook = require('../controllers/book/putBook');
const deleteBook = require('../controllers/book/deleteBook');
const getBooks = require('../controllers/book/getBooks.js');

const route = express();

route.post('/signup', validateSchema(signUpSchema), signUp); //ok
route.post("/signin", validateSchema(signInSchema), signIn); //ok

route.use(authentication); // ok

route.get('/user', getUser); // ok
route.delete('/user', deleteUser); // ok
route.put('/user', validateSchema(putUserSchema), putUser); // ok

route.get('/book', getBooks); // ok
route.post('/book', validateSchema(postBookSchema), postBook); // ok
route.get('/book/:id', getBook); // ok 
route.put('/book/:id', validateSchema(putBookSchema), putBook); // ok // msg Token inválido
route.delete('/book/:id', deleteBook);











module.exports = route 
