const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'User',
  password: 'password',
  database: 'TermProj'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
