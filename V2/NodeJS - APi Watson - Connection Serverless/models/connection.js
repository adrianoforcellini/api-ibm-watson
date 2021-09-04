const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'desafioSmarkio21',
    password: 'desafioSmarkio21!$',
    database: 'smarkio'});

module.exports = connection;
