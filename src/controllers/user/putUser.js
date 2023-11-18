const prisma = require('../../prisma/client');

const putUser = async (req, res) => {
  const { name, email, phone, city, state } = req.body;
  const { id } = req.user;

  try {

    await prisma.user.update({
      where: { id },
      data: { name, email, phone, city, state }
    });

    return res.status(200).json({ message: "Usuário atualizado." });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: `Usuário não encontrado.` });
    }

    if (error.code === "P2002") {
      return res.status(400).json({ message: `O email informado já está em uso.` });
    }

    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }

};

module.exports = putUser