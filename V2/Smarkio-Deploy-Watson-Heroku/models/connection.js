const mysql = require('mysql2/promise');
require("dotenv").config();

const connection = mysql.createPool({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'watson_api'});

module.exports = connection;
