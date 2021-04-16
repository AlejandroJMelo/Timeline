require('dotenv').config()
var colors = require('colors');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/testdb', function(req, res) {
  res.send('testdb')
})

app.listen(process.env.PORT || 3000, () =>{
  console.log(`Server on port ${process.env.PORT}`.green)
} )