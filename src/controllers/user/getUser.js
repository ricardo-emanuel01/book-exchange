const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUser = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, email: true, city: true, state: true },
        });

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado.' });
        }

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

module.exports = getUser;