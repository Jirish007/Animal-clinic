// filepath: /c:/Users/giris/Documents/Coding projects/Frontend developer/Happy Pets Clinic/backend/server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'happyPetsClinic'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.post('/submit', (req, res) => {
    const { date, name, email, number, comment } = req.body;
    const query = 'INSERT INTO appointments (date, name, email, number, comment) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [date, name, email, number, comment], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error submitting form');
            return;
        }
        res.status(201).send('Form submitted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});