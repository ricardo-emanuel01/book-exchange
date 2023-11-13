const express = require('express');
const prisma = require('../prisma/client');
const signin = require('../controllers/user/signin/signin.js');
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
route.post("/signin",signin)

module.exports = route