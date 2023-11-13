

const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const signUp = async (req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const newUser = {
            data: {
                name: req.body.name,
                email: req.body.email,
                password: passwordHash,
                city: req.body.city,
                state: req.body.state,
            },
        };

        await prisma.user.create(newUser);

        return res.status(201).json({ message: 'O usuário foi cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);

        if (error.code === 'P2002') return res.status(400).json({ message: 'O email já está em uso.' });

        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

module.exports = signUp;



