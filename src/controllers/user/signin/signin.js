const jwt = require('jsonwebtoken')
const prisma = require('../../../prisma/client');
const bcrypt = require('bcrypt')

require('dotenv').config();

async function signin(req,res){
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });


    if (user && await bcrypt.compare(password, user.password)) {
        // create jwt with user information
        const token = jwt.sign({ userId: user.id, email: user.email },process.env.SECRET_KEY, { expiresIn:  60 * 60 * 1000 }); //expires in 1 hour

        res.status(200).json({ 
            "id": user.id ,
            "email": user.email ,
            "username": user.username ,
            "token": token
         });
  }else{
        res.status(400).json({
            "message":"invalid email or password"
        })
  }
 } catch(error) {
    console.error(error);
    res.status(500).json({ message: 'internal server error' });
  }

}


module.exports = signin;