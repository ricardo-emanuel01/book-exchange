const prisma = require('../../../prisma/client');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
  const { name, email, phone, password, city, state } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      data: {
        name,
        email,
        phone,
        password: passwordHash,
        city,
        state
      },
    };

    await prisma.user.create(newUser);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ message: 'O email informado já está em uso.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = signUp;