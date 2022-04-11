const mongoose = require('mongoose');
const {Schema} = mongoose;

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foundationYear: {
        type: Number,
        required: true
    },
    books:[{
        type: Array
    }]


})

const Publisher = mongoose.model('Publisher', publisherSchema);
module.exports = {Publisher};