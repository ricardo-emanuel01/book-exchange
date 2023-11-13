const express = require('express');
const prisma = require('../prisma/client');

const route = express();

const authentication = require('../middleware/authentication');

const putUserController = require('../controllers/user/user-update');

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




route.use(authentication);

route.put('/user', putUserController);




module.exports = route