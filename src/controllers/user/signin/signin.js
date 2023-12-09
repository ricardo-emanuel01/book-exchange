const jwt = require('jsonwebtoken');
const prisma = require('../../../prisma/client');
const bcrypt = require('bcrypt');

async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        active_user: true
      }
    });

    if (!user) {
      return res.status(400).json({ "message": "E-mail ou senha inválida" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ "message": "E-mail ou senha inválida" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: "8h" });

    res.status(200).json({
      user: {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "username": user.username,
      },
      "token": token
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

module.exports = signIn;