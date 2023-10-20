// require de todas as dependências necessérias do projeto
require('dotenv').config({path:'variables.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// criação do server e definição da utilização do server das dependências necessárias 
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json())

// import das rotas do arquivo routoes.js
const routes = require('./routes');

// para evitar a necessidade de utilizar "/api" em todas as rotas
server.use('/api', routes)

server.listen(process.env.PORT, () => {
    console.log(`servidor funcionando em: http://localhost:${process.env.PORT}`);
})