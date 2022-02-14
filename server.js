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

// default response for any other request ( not found )
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
