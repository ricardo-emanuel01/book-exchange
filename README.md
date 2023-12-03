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


2. POST /signup

Essa rota cadastra novos usuáros.

### Exemplo de requisição

```json
{
	"name": "Paula", 
	"email": "paula@gmail.com", 
	"phone": "12345678912", 
	"password": "123456",
	"passwordConfirmation": "123456",
	"city": "rio", 
	"state": "rj"
}
```

### Exemplo de resposta

```json
{
	"message": "Usuário cadastrado com sucesso!"
}
```
```json
{
	"mensagem": "O campo email precisa ser um email válido."
}
```
3. POST /signin

Essa rota é para login de usuários cadastrados.

### Exemplo de requisição

```json
{
	"email": "paula@gmail.com",	 
	"password": "123456"	
}
```

### Exemplo de resposta

```json
{
	"user": {
		"id": 1,
		"name": "Paula",
		"email": "paula@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXVsYUBnbWFpbC5jb20iLCJpYXQiOjE3MDE2MjI5MTEsImV4cCI6MTcwMTY1MTcxMX0.GTq6vk_5gBco69aqgKXDVn0FuMKC57fc2WCaq5y7-ME"
}
```
```json
{
	"message": "E-mail ou senha inválida"
}
```
---
## ATENÇÃO: Todos os endpoints a seguir exigem token de autenticação gerado ao logar um usuário. O token dever ser colocado no headers da requisição e deve ter o formato Bearer Token. O usuário logado precisa ter a propriedade ```authorized``` com valor ```true``` para manipular todos os dados de influenciadores, caso contrário só conseguirá ver a lista de influenciadores cadastrados. Essa propriedade é definida no cadastro do usuário.
---

4. PATCH /password

Essa rota altera a senha do usuário logado.

### Exemplo de requisição

```json
{
	"oldPassword": "123456", 
	"password": "1234567", 
	"passwordConfirmation": "1234567"	
}
```

### Exemplo de resposta

```json
{
	"message": "Senha antiga inválida."
}
```
```json
{
	"message": "Senha atualizada."
}
```
5. GET /user 

Essa rota lista dados do usuário logado.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
	"id": 1,
	"name": "Paula",
	"email": "paula@gmail.com",
	"phone": "12345678912",
	"city": "rio",
	"state": "rj"
}
```
```json
{
	"message": "Não autorizado"
}
```

6. POST /book 

Essa rota é para cadastrar novos livros.

### Exemplos de requisição

```json
{
	"title": "O estrangeiro", 
	"author": "Albert Camus", 
	"gender":	["filosofia", "ficção"]
}
```

### Exemplos de resposta

```json
{
	"message": "Livro cadastrado com sucesso!"
}
```
```json
{
	"mensagem": "O campo gender deve ser uma lista com no mínimo 1 item"
}
```


7. PUT /user

Essa Rota altera dados do usuário logado (o usuário pode escolher alterar um ou mais dados).

### Exemplo de requisição

```json
{
	"name": "Paula RML"
}
```

### Exemplo de resposta

```json
{
	"message": "Usuário atualizado."
}
```


7. GET /book/:id

Essa Rota é para encontrar um livro pelo número do id. O ```id``` do livro que se quer encontrar deve ser passado como parâmetro de rota ```req.params```.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
{
	"id": 2,
	"title": "Quarto de despejo",
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
```


8. PUT /book/:id 

Essa rota é para atualizar os dados de um livro específico. O ```id``` do livro que se quer atualizar deve ser passado como parâmetro de rota ```req.params```. O usuário pode escolher alterar um ou mais dados.

### Exemplos de requisição

```json
{
	"title": "Quarto de despejo: Diário de uma favelada"
}
```

### Exemplos de resposta

```json
{
	"message": "Livro atualizado com sucesso!"
}
```

```json
{
	"message": "Não autorizado"
}
```


9. DELETE /user

Essa rota é para excluir a conta do usuário logado.

### Exemplo de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplo de resposta

```json
No body returned for response
```

```json
{
	"message": "Não autorizado"
}
```


10. DELETE /book/:id 

Essa rota é para deletar um livro específico. O ```id``` do livro que se quer deletar deve ser passado como parâmetro de rota ```req.params```.

### Exemplos de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplos de resposta

```json
{
	"message": "Livro excluído com sucesso."
}
```

```json
{
	"message": "Não autorizado"
}
```

10. GET /userbooks

Essa rota lista todos os livros do usuáro logado.

### Exemplos de requisição

Sem corpo de requisição, apenas o token no headers.

### Exemplos de resposta

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
		]
	},
	{
		"id": 2,
		"title": "Quarto de despejo: Diário de uma favelada",
		"author": "Carolina Maria de Jesus",
		"available": true,
		"gender": [
			"biografia",
			"autobiografia"
		]
	},
	{
		"id": 4,
		"title": "O estrangeiro",
		"author": "Albert Camus",
		"available": true,
		"gender": [
			"filosofia",
			"ficção"
		]
	}
]
```

```json
{
	"message": "Não autorizado"
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