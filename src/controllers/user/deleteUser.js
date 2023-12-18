const prisma = require('../../prisma/client');

const deleteUser = async (req, res) => {
  try {

    const userId = req.user.id;

    await prisma.book.updateMany({
      where: {
        user_id: userId
      },
      data: { available: false }
    })

    await prisma.user.update({
      where: {
        id: userId
      }, data: { active_user: false }
    })

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

module.exports = deleteUser;