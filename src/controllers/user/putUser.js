const prisma = require('../../prisma/client');

const userUpdate = async (req, res) => {
    const { name, email, city, state } = req.body;
    const { id } = req.user;
  
    try {
  
        await prisma.user.update({
            where: { id },
            data: { name, email, city, state }
        });
    
        return res.status(204).send();

    } catch (error) {

        if(error.code==="P2025"){
            return res.status(404).json({ message: `Usuário não encontrado.` });
        }
        if(error.code==="P2002"){
            return res.status(400).json({ message: `Já existe um usuário cadastrado com o email informado.` });
        }

        return res.status(500).json({ message: error.message });
    }

  };

  module.exports = userUpdate