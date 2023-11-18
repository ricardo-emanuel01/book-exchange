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
    // Essa parte do código não chega a ser utilizada devido ao intermediário que valida tokens
    if (error.message === 'Token inválido') {
      return res.status(401).json({ message: 'Não autorizado.' });
    }

    if (error.code === 'P2003') {
      return res.status(401).json({ message: 'Não autorizado.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

module.exports = postBook;