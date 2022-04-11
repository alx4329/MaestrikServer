const mongoose = require('mongoose');
const {Schema} = mongoose;

const authorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    country:{
        type: String
    }

})

const Author = mongoose.model('Author', authorSchema);
module.exports = {Author};