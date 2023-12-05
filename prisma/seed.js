const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

async function main() {

    const passUser1 = await bcrypt.hash("123456", 10)

    const user1 = await prisma.user.create({
        data: {
            name: 'João Silva',
            email: 'joao@example.com',
            phone: '12345678901',
            password: passUser1,
            city: 'São Paulo',
            state: 'SP',
        },
    });

    const passUser2 = await bcrypt.hash("123456", 10)

    const user2 = await prisma.user.create({
        data: {
            name: 'Maria Souza',
            email: 'maria@example.com',
            phone: '98765432109',
            password: passUser2,
            city: 'Rio de Janeiro',
            state: 'RJ',
        },
    });

    const book1 = await prisma.book.create({
        data: {
            title: 'Aprendendo JavaScript',
            author: 'John Doe',
            gender: ['Tecnologia', 'Programação'],
            available: true,
            user: {
                connect: { id: user1.id },
            },
        },
    });

    const book2 = await prisma.book.create({
        data: {
            title: 'Poesias Brasileiras',
            author: 'Ana Clara',
            gender: ['Poesia', 'Literatura Brasileira'],
            available: true,
            user: {
                connect: { id: user2.id },
            },
        },
    });

    // Cria algumas propostas 
    const proposal1 = await prisma.proposal.create({
        data: {
            sender: {
                connect: { id: user1.id },
            },
            receiver: {
                connect: { id: user2.id },
            },
            book: {
                connect: { id: book2.id },
            },
            message: 'Olá, estou interessado neste livro!',
        },
    });

    const proposal2 = await prisma.proposal.create({
        data: {
            sender: {
                connect: { id: user2.id },
            },
            receiver: {
                connect: { id: user1.id },
            },
            book: {
                connect: { id: book1.id },
            },
            message: 'Gostaria de saber mais sobre este livro.',
        },
    });

    // Usuário 1 favoritando o livro cadastrado pelo Usuário 2
    const favoriteBook = await prisma.favoriteBook.create({
        data: {
            user_id: 1,
            book_id: 2,
            title: 'Poesias Brasileiras',
            author: 'Ana Clara',
            gender: ['Poesia', 'Literatura Brasileira']
        }
    })

    console.log('Dados de seed criados com sucesso!');
}

// Chame a função main
main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        // Feche a conexão do Prisma Client
        await prisma.$disconnect();
    });
