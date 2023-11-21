
const prisma = require('../../prisma/client');

const putBook = async (req, res) => {
  try {
    const { title, author, gender } = req.body;
    const bookId = Number(req.params.id);
    const userId = req.user.id;

    const data = {
      title,
      author,
      gender
    }

    await prisma.book.update({
      where: {
        id: bookId,
        user_id: userId
      },
      data
    });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Livro não encontrado.' });

    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = putBook;