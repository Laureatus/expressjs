const express = require('express')
const app = express()
const port = 3000


function connectToDatabase(req, res) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'lorin'
  });

connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    res.send('The solution is: ' + rows[0].solution);
  });

  connection.end();
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('User route')
})

app.get('/login', (req, res) => {
  res.send('Login route')
})

app.get('/db', (req, res) => {
  connectToDatabase(req, res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
