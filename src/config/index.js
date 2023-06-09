// yarn add dotenv
require('dotenv').config();

module.exports = {
    database: process.env.DATABASE,
    userName: process.env.USER,
    passWord: process.env.PASSWORD,
    host:process.env.HOST,
    port:process.env.PORT,
    dialect:process.env.DIALECT
}