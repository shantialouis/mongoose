const express = require('express');
const router = express.Router()
const person = require('../model/personSchema');
let arrayOfPeople = require('../arrayOfPeople');

//Create a model and save
let exemple = new person({
    _id : '0', name : "Mohamed", age : 26, favoriteFood : ['pasta', 'mloukhia', 'jelbena', 'tajine']
});
exemple.save((err,exemple) => {
    if (err) return handleError(err);
    else console.log('exemple created and saved: ', exemple);
    //Find person by name :
        person.find({name : "Ali"}, (err, document) => {
        if (err) return handleError(err);
        else console.log('Find person by name :', document)
        });
    //Find one person by favorite food :
        person.findOne({favoriteFood :'tajine'},(err, document) => {
            if (err) return handleError(err);
            else console.log('Find one person by favorite food:', document)
        });
    //Find person by _id :
        person.findById('1', (err, document) => {
            if (err) return handleError(err);
            else console.log('Find one person by Id:', document)
        });
    //Find person by _id then edit :
        person.findById('1', (err, document) => {
            if (err) return handleError(err);
            else {
                document.favoriteFood.push('3alouch mosli');
                console.log('Find one person by Id and edit:', document);
            }
        });
    //Find person and then update :
        person.findOneAndUpdate({name : 'Sarra'}, {age : 20},{new : true}, (err, document) => {
            if (err) return handleError(err);
            else console.log('Find person and Update age to 20 :', document)
        });
    //Find person by _id and remove it :
        person.findByIdAndRemove('1', (err, document) => {
            if (err) return handleError(err);
            else console.log('Find person by id and remove it :', document)
        });
    //Chain search with query helpers :
        person.find({favoriteFood : 'tajine'}).sort({name : 1}).limit(2).select({age : false}).exec().then(docs => {
                console.log('Chain search result :', docs)
            })
            .catch(err => {
                console.error(err)
            })
});
//Create collection :
person.create(arrayOfPeople,(err, data) => {
    if (err) return handleError(err);
    else console.log('collection created :', data)
})

module.exports = router;