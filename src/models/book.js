const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    synopsis:{
        type: String
    },
    genre:[{
        type: String
    }], 
    publicationYear:{
        type: Number
    }

})

const Book = mongoose.model('Book', bookSchema);
module.exports = {Book};