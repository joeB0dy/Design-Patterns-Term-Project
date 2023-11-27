const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: 'sql5665289',
    password: 'P9jeb9GNuF',
    database: 'sql5665289'

})

// Endpoint to get data
app.get('/api/data', (req, res) => {
    // Query your database and send data
    db.query('SELECT * FROM Users', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.query(`SELECT * FROM Users WHERE username = ? AND password = ?`, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Server error');
        } else {
            if (result.length > 0) {
                res.json({ success: true, message: "Login successful" });
            } else {
                res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        }
    });
});

app.listen(8081, ()=>{
    console.log("listening");
})