const prisma = require('../../prisma/client');

const postBook = async (req, res) => {
    try {
        const userId = req.user.id;

        const newBook = {
            data: {
                title: req.body.title,
                author: req.body.author,
                gender: req.body.gender,
                user_id: userId,
            },
        };

        await prisma.book.create(newBook);

        return res.status(201).json({ message: `Livro cadastrado com sucesso!` });
    } catch (error) {
        console.error(error);

        if (error.message === 'Token inválido') return res.status(401).json({ message: 'Token inválido' });

        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = postBook;