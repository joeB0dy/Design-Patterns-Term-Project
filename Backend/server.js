const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 8081;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: 'sql5665289',
    password: 'P9jeb9GNuF',
    database: 'sql5665289'

})

// Endpoint to just display data.
app.get('/api/data', (req, res) => {
    // Query your database and send data
    db.query('SELECT * FROM Users', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

//check login and send back json to client. client organizes data.
/*
app.get ('/api/check', (req, res) => {
        db.query(`SELECT * FROM Users
        (
            username , password
        )
        `)
})
*/
app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   console.log("username and password server recieved ", username,password);
    // Select only the username and password columns
    db.query("SELECT email, master_password_hash  FROM Users WHERE email = ?", [username], (err, result) => {
        if (err) {  //if there's an error.
            res.status(500).send('Server error');
            console.log("error with query entry.", err)
        } 
        else {
            if (result.length > 0) {    //this means that there was something found
            console.log("query went through and something was found.", result);
            //retrieve specific items from json and turn them into correct variables to compare.
            const userObj = result[0].email;
            const passObj = result[0].master_password_hash;
            console.log(userObj, passObj); //check
                //compare the result entry to sent username and password
                if( userObj==username && passObj == password){
                    res.json({ success: true, message: "Login successful" });
                    
                }
                
            }else {
                // No matching user found in the database
                console.log("query went through, nothing found.")
                res.status(401).json({ success: false, message: "Invalid credentials" });
               
            }
            
        }
   
    });
});

//register new users into system.
app.post('/api/register', (req, res) => {
    const { email, password, secQ1, secQ2, secQ3 } = req.body;
    
    console.log("server received values", email, password, secQ1, secQ2, secQ3)

    db.query("INSERT INTO Users (`email`, `master_password_hash`, `security_answer_1`, `security_answer_2`, `security_answer_3`) VALUES (?, ?, ?, ?, ?)", [email, password, secQ1, secQ2, secQ3], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Server Error');
        } else {
            res.status(200).json({ success: true, message: "Registration successful" });
        }
    });
});

app.listen(PORT, ()=>{
    console.log("listening on PORT", PORT);
})