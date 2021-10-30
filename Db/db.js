var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'be4736a2d31707',
  password : 'dfc55496',
  database:"heroku_510b1f46d3a2aca"
 
});
db.connect(err=>{
    if(err){
       throw err
    }
    console.log('you are connected ')
})
 
module.exports =db; 


