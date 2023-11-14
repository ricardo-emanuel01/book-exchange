
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const deleteUser = async (req, res) => {
    try {

        const userId = req.user.id;

        await prisma.book.deleteMany({
            where: {
                user_id: userId
            }
        })

        await prisma.user.delete({
            where: {
                id: userId
            }
        })

        return res.status(204).send();
    } catch (error) {
        console.error(error);

        if (error.message === 'Token inválido') return res.status(401).json({ error: 'Token inválido.' });

        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = deleteUser;
