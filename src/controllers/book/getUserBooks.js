

// GET /userbooks
// permite ao usuário logado ver todos os seus livros
// requisição: TOKEN NO HEADER (ID)
// devolve: todos os livros do usuário com: id, título, autor, gênero
// erro: 401, 500



const prisma = require('../../prisma/client');

const getUserBooks = async (req, res) => {
    try {
        const userId = req.user.id;

        const books = await prisma.book.findMany({
            where: { user_id: userId },
            select: {
                id: true,
                title: true,
                author: true,
                available: true,
                gender: true

            }
        });

        if (!books) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }

        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

module.exports = getUserBooks;