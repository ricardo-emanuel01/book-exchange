const prisma = require('../../prisma/client');

const bookList = async (req, res) =>{
    let {user_id} = req.query;

    try {

        let parameters = {}

        if(Array.isArray(user_id)){
            parameters.where = {
                user_id: {
                    in: user_id.map(Number)
                }
            }
        }
        else{
            if(user_id){
                parameters.where = {
                    user_id: Number(user_id)
                }
            }
        }

        parameters.select = {
            id:true,
            title:true,
            author:true,
            gender:true,
            user:{
                select:{
                    id:true,
                    name:true
                }
            }
        }

        const books = await prisma.book.findMany(parameters);

        res.status(200).json(books);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = bookList;