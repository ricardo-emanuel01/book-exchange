
const prisma = require('../../prisma/client');

const getBook = async (req, res) => {
  try {
    const bookId = Number(req.params.id);

    const book = await prisma.book.findUnique({
      where: { id: bookId },
      select: {
        id: true,
        title: true,
        author: true,
        available: true,
        gender: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = getBook;