const prisma = require('../../prisma/client');
const bcrypt = require('bcrypt');

const patchUser = async (req, res) => {
    const { oldPassword, password, passwordConfirmation } = req.body;
    const { id } = req.user;

    try {
        const user = await prisma.user.findUnique({ where: { id } });

        const validePassword = await bcrypt.compare(oldPassword, user.password);

        if (!validePassword) {
            return res.status(400).json({ message: "Senha antiga inválida." })
        }

        const passwordHash = await bcrypt.hash(password, 10);
        await prisma.user.update({
            where: { id },
            data: { password: passwordHash }
        });

        return res.status(200).json({ message: "Senha atualizada." });
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ message: `Usuário não encontrado.` });
        }

        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }

};

module.exports = patchUser