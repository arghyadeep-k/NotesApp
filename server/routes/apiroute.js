const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const noteSchema = require('./model/note');

const connectionString = 'mongodb+srv://arghya:<password>@notesdb-yypr3.mongodb.net/test?retryWrites=true&w=majority'

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, (err) => {
    if(err) {
        console.log('Connection unsuccessful. Error - '+err);
    }        
});

mongoose.connection.on('connected',() => {
    console.log("Database connection successful");
});

router.get('/',(req,res,next)=> {
    res.send('Retieving notes');
    //Add code
});


module.exports = router;
