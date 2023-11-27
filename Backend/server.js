const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

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

app.listen(8081, ()=>{
    console.log("listening");
})