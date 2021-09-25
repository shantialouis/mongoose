const express = require('express');
const mongoose = require('mongoose');
const personRoute = require('./routes/personRoute')

const app = express();
app.use(express.json());

//Connecting the database to the server 
mongoose.connect('mongodb+srv://admin:admin@checkpoint.scbz2.mongodb.net/Checkpoint?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    err => {
        if(err) throw err
        else console.log('Database is connected')
    }
);

//Using routes with express Router
app.use(personRoute)

//Creating server on port 5000
app.listen(5000 , err => {
    if(err) console.log(err)
    else console.log('Server is running on port 5000')
})