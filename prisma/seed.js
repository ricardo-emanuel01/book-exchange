
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

async function main() {

    const user1 = await prisma.user.create({
        data: {
            name: 'João Silva',
            email: 'joao@example.com',
            phone: '12345678901',
            password: 'senha123',
            city: 'São Paulo',
            state: 'SP',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Maria Souza',
            email: 'maria@example.com',
            phone: '98765432109',
            password: 'outrasenha456',
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
