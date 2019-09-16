var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const noteSchema= new Schema({
    title: String,
    body: String,
    url: String,
});


module.exports = mongoose.model('note', noteSchema);