const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'sql5665289',
    password: 'P9jeb9GNuF',
    database: 'sql5665289'

})

app.get('/', (re, res)=> {
    return res.json("From backend");
})

app.listen(8081, ()=>{
    console.log("listening");
})