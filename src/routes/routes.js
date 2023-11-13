const express = require('express');
const prisma = require('../prisma/client');

const validateSchema = require('../middleware/validateSchema');
const userSchema = require('../schema/userSchema');
const bookSchema = require('../schema/bookSchema');

const getUser = require('../controllers/user/getUser');
const postBook = require('../controllers/book/postBook');
const signUp = require('../controllers/user/signup/signup');

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

// route.use(validateLogin);

route.get('/user', getUser);
route.post('/book', validateSchema(bookSchema), postBook);

module.exports = route 
