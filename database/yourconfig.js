var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : '3306',
    user    : 'root',
    password: 'root',
    database: 'soundcloud'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connection is id ' + connection.threadId);
    }
});

module.exports = {connection};