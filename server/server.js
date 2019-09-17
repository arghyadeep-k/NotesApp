//Importing modules
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

const port = 3000;

const api = require('./routes/apiroute');

//body parser
app.use(bodyparser.json());

//static files
//app.use(express.static(path.join(__dirname,'client')));

//Redirect to Api for home calls to fetch the notes for homepage
app.use('/api', api);

//return other routes to Angular Index file
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'index.js'));    
})

app.listen(port , ()=>{
    console.log('Listening on port 3000');   
});


