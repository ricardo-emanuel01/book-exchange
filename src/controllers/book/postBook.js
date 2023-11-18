const prisma = require('../../prisma/client');

const postBook = async (req, res) => {
  const { title, author, gender } = req.body;
  try {
    const userId = req.user.id;

    const newBook = {
      data: {
        title,
        author,
        gender,
        user_id: userId,
      },
    };

    await prisma.book.create(newBook);

    return res.status(201).json({ message: `Livro cadastrado com sucesso!` });
  } catch (error) {
    if (error.code === 'P2003') {
      return res.status(401).json({ message: 'Não autorizado.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

module.exports = postBook;