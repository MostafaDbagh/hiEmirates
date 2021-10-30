var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'be6e9cc96c8b0a',
  password : 'ab56e9e7',
  database:"heroku_494961cf20d3161"
 
});

 
module.exports =db; 


