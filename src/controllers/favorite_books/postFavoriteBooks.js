const prisma = require("../../prisma/client");

const postFavoriteBooks = async (req, res) => {
  const { id } = req.user;
  const book_id = Number(req.params.book_id);

  if (isNaN(book_id)) {
    return res.status(400).json({ message: "O parâmetro passado no endpoint deve ser um número." })
  }

  try {
    const user = await prisma.user.findUnique({ where: { id }, select: { id: true, name: true } });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const book = await prisma.book.findUnique({ where: { id: book_id, available: true } });

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    const favoriteBook = await prisma.favoriteBook.findFirst({ where: { book_id, user_id: id } });

    if (!favoriteBook) {
      await prisma.favoriteBook.create({
        data: {
          book_id,
          user_id: id,
          title: book.title,
          author: book.author,
          gender: book.gender
        }
      });

      return res.status(201).json({ message: "Adicionado aos favoritos" });
    }

    const favorite = !favoriteBook.favorite;

    await prisma.favoriteBook.update({
      where: {
        id: favoriteBook.id
      },
      data: {
        favorite
      }
    });

    return res.status(200).json({ message: "A lista de favoritos foi atualizada" });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
}

module.exports = postFavoriteBooks;