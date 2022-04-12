require('dotenv').config();
const mongoose = require('mongoose')
const loadData = require('../data/loaders')

const DATABASE_URL = process.env.DATABASE_URL;

const DB = { ObjectID: mongoose.Types.ObjectId };
const connectDB = () => {
    return mongoose.connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true}, err=>{
        if(err){
            console.log(err)
        } else {
            console.log('Connected to database')
        }
    })
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.dropCollection('authors', function(err, result) {})
// db.dropCollection('books', function(err, result) {})
// db.dropCollection('publishers', function(err, result) {})
// loadData()
module.exports = connectDB;