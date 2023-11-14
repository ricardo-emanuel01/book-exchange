const prisma = require('../../prisma/client');

const userUpdate = async (req, res) => {
    const { name, email, password, city, state } = req.body;
    const { id } = req.user;
  
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
  
        if(email){
            const emailExists = await prisma.user.findUnique({
                where: { email },
            });
      
            if (emailExists && emailExists.id != id) {
                return res.status(400).json({
                    message: "Já existe um usuário cadastrado com o email informado.",
                });
            }
        }
  
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { name, email, password, city, state }
        });
    
        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

  };

  module.exports = userUpdate