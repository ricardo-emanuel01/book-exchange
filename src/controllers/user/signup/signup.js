const prisma = require('../../../prisma/client');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
  const { name, email, phone, password, city, state } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } })

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      data: {
        name,
        email,
        phone,
        password: passwordHash,
        city,
        state,
        active_user: true
      },
    };

    if (!user) {
      await prisma.user.create(newUser);

      return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }

    if (user.active_user) {
      return res.status(400).json({ message: 'O email informado já está em uso.' });
    }

    await prisma.user.update({ where: { id: user.id }, ...newUser });

    await prisma.book.updateMany({ where: { user_id: user.id, }, data: { available: true } });

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = signUp;