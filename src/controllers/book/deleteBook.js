const prisma = require('../../prisma/client');

const deleteBook = async (req, res) => {

  try {
    const id = Number(req.params.id);
    const book = await prisma.book.findUnique({
      where: { id, available: true }
    })

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado." })
    }

    const bookForDelete = await prisma.book.findUnique({ where: { id, user_id: req.user.id } });

    if (!bookForDelete) {
      return res.status(400).json({ message: "Livro não existe ou não pertence ao usuário logado." });
    }

    const favoriteBooks = await prisma.favoriteBook.findMany({ where: { book_id: id } });

    if (favoriteBooks.length) {
      await prisma.favoriteBook.deleteMany({ where: { book_id: id } })
    }

    await prisma.book.delete({ where: { id, user_id: req.user.id } })

    return res.status(200).json({ message: "Livro excluído com sucesso." })
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}


module.exports = deleteBook;