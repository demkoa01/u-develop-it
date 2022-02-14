const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// add express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// get all data returned
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// get a single candidate
db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
    if(err) {
        console.log(err);
    } else {
        console.log(row);
    }
});

// delete a candidate
// db.query(`DELETE FROM candidates WHERE id=?`, 1, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
    VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err,result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

// default response for any other request ( not found )
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
