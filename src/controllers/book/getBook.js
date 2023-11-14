
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getBook = async (req, res) => {
    try {
        const bookId = Number(req.params.id);

        const book = await prisma.book.findUnique({
            where: { id: bookId },
            select: { id: true, user_id: true, title: true, author: true, gender: true },
        });

        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }

        return res.status(200).json(book);
    } catch (error) {
        console.log(error);

        if (error.message === 'Token inválido') return res.status(401).json({ message: 'Token inválido' });

        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

module.exports = getBook;