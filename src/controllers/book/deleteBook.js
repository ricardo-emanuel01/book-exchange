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

    await prisma.book.update({ where: { id }, data: { available: false } })

    return res.status(200).json({ message: "Livro excluído com sucesso." })


  } catch (error) {

    res.status(500).json({ message: "Erro interno do servidor." });
  }
}


module.exports = deleteBook;