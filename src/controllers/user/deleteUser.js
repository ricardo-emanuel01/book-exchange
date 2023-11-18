const prisma = require('../../prisma/client');

const deleteUser = async (req, res) => {
  try {

    const userId = req.user.id;

    await prisma.book.deleteMany({
      where: {
        user_id: userId
      }
    })

    await prisma.user.delete({
      where: {
        id: userId
      }
    })

    return res.status(204).send();
  } catch (error) {
    // Essa parte do código não chega a ser utilizada devido ao intermediário que valida tokens
    if (error.message === 'Token inválido') {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

module.exports = deleteUser;