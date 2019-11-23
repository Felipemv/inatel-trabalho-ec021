# Trabalho Prático de EC021 – Tópicos Avançados II

## Dependências
- [Node.js](https://nodejs.org/en/): Interpretador JavaScript
- [NPM](https://www.npmjs.com/): Gerenciador de pacotes Node.js
- [MongoDB](https://www.mongodb.com/): Banco de dados baseado em documentos

## Bibliotecas
### Produção
- [Restify](http://restify.com/): Framework Node.js
- [Restify Router](https://www.npmjs.com/package/restify-router): Responsável pelo gerenciamento das rotas
- [Axios](https://github.com/axios/axios): Responsável por toda comunicação HTTP com o servidor de Autenticação
- [Mongoose](https://mongoosejs.com/): Responsável pelo controle do banco de dados, como modelos de esquemas, validação e funções  de inserção, atualização, listagem e exclusão
- [Dotenv](https://www.npmjs.com/package/dotenv): Responsável pelas variáveis de ambiente da aplicação

### Desenvolvimento
- [Nodemon](https://nodemon.io/): Utilizado para fazer a reinicialização automática da aplicação ao sofrer uma modificação

## Configuração
### Configuração do arquivo *".env"*
1. Renomeie o arquivo *".env.example"* para *".env"*
1. Abra o arquivo e coloque os parâmetros necessários
    - `PORT`: Porta usada para rodar a aplicação
    - `DB_URL`: URL do banco de dados utilizado
    - `DB_NAME`: Nome do banco de dados utilizado
    - `AUTH_SERVER`: URL do servidor de autenticação


## Execução
1. Faça o clone/download do repositório no seu computador
1. Faça a configuração necessária
1. Abra a pasta e rode o comando:

    - `npm install`

1. Para iniciar a aplicação rode o comando:

    - `npm run start`