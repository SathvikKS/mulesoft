const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'oracle.sathvikks.com',
    user: 'mulesoft',
    password: process.env.dbPassword,
    database: 'mulesoft',
    multipleStatements: true
});

connection.connect((err) => {

})

module.exports = {connection, mysql}