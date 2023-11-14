const express = require('express');
const prisma = require('../prisma/client');

const validateSchema = require('../middleware/validateSchema');
const userSchema = require('../schema/userSchema');
const bookSchema = require('../schema/bookSchema');

const signUp = require('../controllers/user/signup/signup');
const signin = require('../controllers/user/signin/signin.js');

const authentication = require('../middleware/authentication');

const putUserController = require('../controllers/user/user-update');
const postBook = require('../controllers/book/postBook');
const getBooksController = require('../controllers/book/book-list');

const route = express();


// rota de teste utilizando prisma
route.get("/", async (req, res) => {
    try {
        //trocar proposal por book ou user para testar
        const users = await prisma.proposal.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("erro interno do servidor")
    }
})
route.post('/signup', validateSchema(userSchema), signUp);
route.post("/signin", signin)

route.use(authentication);

route.put('/user', putUserController);
route.post('/book', validateSchema(bookSchema), postBook);
route.get('/books', getBooksController);










module.exports = route 
