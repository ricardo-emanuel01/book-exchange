const express = require('express');
const prisma = require('../prisma/client');

const route = express();

// rota de teste utilizando prisma
route.get("/", async (req, res) => {
    try {
        const users = await prisma.user.findMany() //trocar proposal por book ou user para testar
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("erro interno do servidor")
    }
})

module.exports = route