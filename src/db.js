// imortando a dependência mysql
const mysql = require('mysql');

// configurando a conexão com o banco de dados utilizando o arquivo de variáveis (variables.env) para melhor organização
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// criando a conexão com o banco de dados 
connection.connect((error) => {
    if(error) throw error;
    console.log(`conectado ao banco de dados: ${process.env.DB_NAME}`);
});

// exportando a conexão
module.exports = connection;
