const express = require('express');
const prisma = require('../prisma/client');

const validateSchema = require('../middleware/validateSchema');
const userSchema = require('../schema/userSchema');
const bookSchema = require('../schema/bookSchema');

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

module.exports = route 