var mysql = require('mysql2/promise');
require('dotenv').config();

var con = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});


module.exports = con;