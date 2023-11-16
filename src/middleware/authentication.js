const jwt = require("jsonwebtoken");
const prisma = require('../prisma/client');

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Não autorizado" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY);

    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Não autorizado" });
  }
};

module.exports = authentication;