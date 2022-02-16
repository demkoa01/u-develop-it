const mysql = require('mysql2');

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // my username
        user: 'root',
        //my PW
        password: 'Mrs.Carlson2023',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;