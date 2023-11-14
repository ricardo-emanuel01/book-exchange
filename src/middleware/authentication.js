const jwt = require("jsonwebtoken");
const prisma = require('../prisma/client');

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).json({ message: "Authentication token is required."});
        }

        const { userId } = jwt.verify(token, process.env.JWT_KEY);
        const user = await prisma.user.findUnique({ where: {id:userId}});

        if (!user) {
            return res.status(401).json({ message: "Authentication token is required."});
        }

        const { password:_, ...loggedUser } = user;
        req.user = loggedUser;
        next();
        
    } catch (error) {
        return res.status(500).json({ message: "Authentication token is required." });
    }
};

module.exports = authentication;