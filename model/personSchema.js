const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creating a person schema
const personSchema = new Schema({
    _id : {type : String, required : true},
    name : {type : String, required : true},
    age : Number,
    favoriteFood : [String]
});

//Exporting the person schema
const person = mongoose.model('person', personSchema);
module.exports = person;