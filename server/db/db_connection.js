const mysql = require('mysql');
const myConnection = require('express-myconnection');

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'expedia'
};

module.exports = myConnection(mysql, dbOptions, 'single');