const express = require('express')
const app = express()
const path = require('path')
const cors = require("cors");
const route = require('./route/route')

const PORT = process.env.PORT||4000 ;

app.use(cors());
app.use(express.static("./public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads',express.static(path.join(__dirname ,'uploads')));
 app.use('/',route)




 
 if(process.env.NODE_ENV ==='production'){
    app.use(express.static('./client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

  
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))