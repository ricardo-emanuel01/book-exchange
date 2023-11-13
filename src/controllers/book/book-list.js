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

        const result = await prisma.book.findMany(parameters);

        const users = {};

        result.forEach(row => {
            const userId = row.user.id;

            if (!users[userId]) {
                users[userId] = {
                    id: row.user.id,
                    name: row.user.name,
                    books: []
                }
            }
            users[userId].books.push({
                id: row.id,
                title: row.title,
                author: row.author,
                gender: row.gender
            });

        });

        const usersReturn = [];

        for (const userId in users) {
            usersReturn.push(users[userId]);
        }

        res.status(200).json({users: usersReturn});

    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

module.exports = bookList;