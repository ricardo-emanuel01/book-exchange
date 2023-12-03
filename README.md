# Book-Exchange

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="imagem.png" alt="Exemplo imagem">

> Desenvolvemos uma API para uma aplicação web focada na troca de livros entre os usuários.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Tarefa 1
- [ ] Tarefa 2
- [ ] Tarefa 3
- [ ] Tarefa 4
- [ ] Tarefa 5

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<linguagem / dependência / requeridos>`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.
- Você leu `<guia / link / documentação_relacionada_ao_projeto>`.

## 🚀 Instalando <nome_do_projeto>

Para instalar o <nome_do_projeto>, siga estas etapas:

Linux e macOS:

```
<comando_de_instalação>
```

Windows:

```
<comando_de_instalação>
```

## ☕ Usando <nome_do_projeto>

Para usar <nome_do_projeto>, siga estas etapas:

```
<exemplo_de_uso>
```

Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Fornece uma referência de opções para pontos de bônus!

## URL da API:
```
https://api-projeto-influencer-hub.cyclic.app

URL alternativa: https://api-projeto-influencer-hub-alternative.onrender.com
```

## Rotas da API

Utilize a URL da API com os endpoints a seguir para acessar as Rotas


1. GET /book

Essa rota lista todos os livros dos usuários da plataforma sem a necessidade de login.

### Exemplo de resposta

```json
[
	{
		"id": 1,
		"title": "Um teto todo seu",
		"author": "Virginia Woolf",
		"available": true,
		"gender": [
			"Ensaio",
			"ficção"
		],
		"user": {
			"id": 1,
			"name": "Paula RML"
		}
	},
	{
		"id": 2,
		"title": "Quarto de despejo: Diário de uma favelada",
		"author": "Carolina Maria de Jesus",
		"available": true,
		"gender": [
			"biografia",
			"autobiografia"
		],
		"user": {
			"id": 1,
			"name": "Paula RML"
		}
	}
]
```


2. POST /login

Essa rota é para login de usuários cadastrados.

### Exemplo de requisição

```json
{
    "email": "lucas@email.com",
    "password": "123"
}
```

### Exemplo de resposta

```json
{
    "E-mail ou senha incorreta!"
}
```
```json
{
    "usuario": {
        "id": 1,
        "name": "Lucas",
        "email": "lucas@email.com",
        "authorized": true
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg5MDE5ODAyLCJleHAiOjE2ODkwNDg2MDJ9.Jpd0o2K7-02l-midG6VfWNIgPV6uslQnxc2AH3eO6VA"
}
```
---
## ATENÇÃO: Todos os endpoints a seguir exigem token de autenticação gerado ao logar um usuário. O token dever ser colocado no headers da requisição e deve ter o formato Bearer Token. O usuário logado precisa ter a propriedade ```authorized``` com valor ```true``` para manipular todos os dados de influenciadores, caso contrário só conseguirá ver a lista de influenciadores cadastrados. Essa propriedade é definida no cadastro do usuário.
---

3. GET /profile

Essa rota é para obter os dados do usuário logado.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
    "Usuário não autorizado!"
}
```
```json
{
    "id": 1,
    "name": "Lucas",
    "email": "lucas@email.com",
    "authorized": true
}
```
4. GET /categories 

Essa rota é para listar as categorias de conteúdo.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
    "Usuário não autorizado!"
}
```
```json
[
    {
        "id": 1,
        "category": "Vlog"
    },
    {
        "id": 2,
        "category": "Review"
    },
    {
        "id": 3,
        "category": "Moda e Estilo"
    },
    {
        "id": 4,
        "category": "Beleza"
    }
]
```

5. POST /influencers 

Essa rota é para cadastrar influenciadores

### Exemplos de requisição

```json
{
    "name": "Pato Papão",
    "email":"patopa@email.com",
    "age": 31,
    "subscribers": 1200000,
    "at_channel": "paptopapao_oficial2",
    "platform": "YouTube",
    "id_category": 13
}
```
```json
{
    "name": "Peter L",
    "subscribers": 1200000,
    "at_channel": "@nerdchannel",
    "platform": "YouTube",
    "id_category": 10
}
```

### Exemplos de resposta

```json
{
    "Este e-mail já foi cadastrado."
}
```
```json
{
    "O @ do canal já possui registro."
}
```
```json
{
    "id": 5,
    "name": "Pato Papão",
    "email": "patopa@email.com",
    "age": 31,
    "subscribers": 1200000,
    "at_channel": "paptopapao_oficial2",
    "platform": "YouTube",
    "id_user": 1,
    "id_category": 13,
    "category": "Games"
}
```

6. GET /influencers

Essa Rota é para listar todos os influenciadores cadastrados

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
    "Usuário não autorizado!"
}
```
```json
[
    {
        "id": 1,
        "name": "Pato Papão",
        "email": "pato@email.com",
        "age": 31,
        "subscribers": 1200000,
        "at_channel": "paptopapao_oficial",
        "platform": "YouTube",
        "id_user": 1,
        "id_category": 13,
        "category": "Games"
    },
    {
        "id": 2,
        "name": "Nyvi",
        "email": "nyvi@st.com",
        "age": 29,
        "subscribers": 500000,
        "at_channel": "nyvieoficial",
        "platform": "YouTube",
        "id_user": 1,
        "id_category": 10,
        "category": "Entretenimento"
	},
]
```

7. GET /influencers/:id

Essa Rota é para encontrar um influenciador pelo número do id. O ```id``` do influenciador que se quer encontrar deve ser passado como parâmetro de rota ```req.params```.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
    "Usuário não autorizado!"
}
```
```json

{
    "id": 1,
    "name": "Pato Papão",
    "email": "pato@email.com",
    "age": 31,
    "subscribers": 1200000,
    "at_channel": "paptopapao_oficial",
    "platform": "YouTube",
    "id_user": 1,
    "id_category": 13,
    "category": "Games"
}

```

8. PUT /influencers/:id 

Essa rota é para atualizar um influenciador. O ```id``` do influenciador que se quer atualizar deve ser passado como parâmetro de rota ```req.params```.

### Exemplos de requisição

```json
{
    "name": "Pato Papão",
    "email":"patopa@email.com",
    "age": 31,
    "subscribers": 1200000,
    "at_channel": "paptopapao_oficial2",
    "platform": "YouTube",
    "id_category": 13
}
```
```json
{
    "name": "Peter L",
    "subscribers": 1200000,
    "at_channel": "@nerdchannel",
    "platform": "YouTube",
    "id_category": 10
}
```

### Exemplos de resposta

```json
{
    "Influencer não encontrado!"
}
```

```json
{
    "Este e-mail já foi cadastrado."
}
```
```json
{
    "O @ do canal já possui registro."
}
```
```json
{
    "id": 5,
    "name": "Pato Papão",
    "email": "patopa@email.com",
    "age": 31,
    "subscribers": 1200000,
    "at_channel": "paptopapao_oficial2",
    "platform": "YouTube",
    "id_user": 1,
    "id_category": 13,
    "category": "Games"
}
```

9. DELETE /influencers/:id

Essa rota é para excluir um influenciador. O ```id``` do influenciador que se quer excluir deve ser passado como parâmetro de rota ```req.params```.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
    "Usuário não autorizado!"
}
```
```json
{
    "Influencer não encontrado!"
}
```
```json
{
    "Influenciador excluído com sucesso"
}
```

## 📫 Contribuindo para <nome_do_projeto>

Para contribuir com <nome_do_projeto>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 🙏 Agradecimentos
<div align="center">

<img src="./img/agradecimentos.png" alt="agradecimentos" width=400 border="0" /> </div>

Agradecemos a nossa professora Isabella Nunes; nossa representante de turma Jules; o monitor Lucas Oliveira; os professores Guido Cerqueira, José Messias Junior e Guilherme Bernal; ao Potência Tech, iniciativa do iFood que nos conectou; e também a todos da Cubos Academy.

## 🤝 Colaboradores
<table>
    <tr>
        <td align="center">
            <a href="https://www.linkedin.com/in/pestanafj/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQFuhJhMUgbTiA/profile-displayphoto-shrink_800_800/0/1686339189755?e=1707350400&v=beta&t=jE6UXLw7Wbf8Eqp6Gxv0IetE0Nk0C0f24ciFNtNnEA0" width="190px;" alt="Fernanda Pestana" />
                <br />
                <sub><b>Fernanda Pestana</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/lucas-oliveira-5b8a5532/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQH8gh_9Gnw1gw/profile-displayphoto-shrink_800_800/0/1680208761626?e=1707350400&v=beta&t=rMmIv8oSQCiqF6P1SR4VK698DbqWuDSvT7HpadACOvw" width="190px;" alt="Lucas Oliveira" />
                <br />
                <sub><b>Lucas Oliveira</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/marina-barbosa-exp/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4E03AQEXU8ad9-AIVg/profile-displayphoto-shrink_800_800/0/1700273495981?e=1707350400&v=beta&t=7SoBCO5doi5lXolNEwRW4NikfOPCk6AqbPB9905ejvI" width="190px;" alt="Marina Barbosa" />
                <br />
                <sub><b>Marina Barbosa</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/miguel-modesto/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D35AQHeUuw0Cyd9qA/profile-framedphoto-shrink_800_800/0/1698541105358?e=1702231200&v=beta&t=0LGIvzsS6NJVwL1Ugx2l5VB8hd-SCp2xIn4QlXt93qg" width="190px;" alt="Miguel Modesto" />
                <br />
                <sub><b>Miguel Modesto</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/paularml/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQE3oc_qqvdPEw/profile-displayphoto-shrink_800_800/0/1697671749779?e=1703116800&v=beta&t=5M4947LwzcV6CZcij3TbmGi7RL0BZNnJBNeTsGfy_qs" width="195px;" alt="Imagem de Paula Magalhães Leite" />
                <br />
                <sub><b>Paula R. M. Leite</b></sub>
            </a>
        </td>
    </tr>
</table>

## 📝 Licença
Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.
<br>

---

###### tags: `back-end` `nodeJS` `PostgreSQL` `API REST` `Prisma` `Javascript` `API`