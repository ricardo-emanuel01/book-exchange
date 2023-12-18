const { number } = require('joi');
const prisma = require('../../prisma/client');

const deleteBook = async (req, res) => {

  try {
    const id = Number(req.params.id);
    const book = await prisma.book.findUnique({
      where: { id },
    })

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado." })
    }

    await prisma.book.delete({ where: { id: Number(id), user_id: req.user.id } });
    return res.status(200).json({ message: `Livro excluído com sucesso.` });

  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        message:
          `Não é possível excluir. Livro não existe ou não pertence ao usuário logado.`
      });
    }
    res.status(500).json({ message: error.message });
  }
}



module.exports = deleteBook;