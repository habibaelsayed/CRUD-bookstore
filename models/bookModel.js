const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A book must have a name'],
        unique: true
    },
    author: {
        type: String,
        required: [true, 'A book must have an author']
    },
    quantity:{
        type: Number,
        default: 1
    },
    price:{
        type: Number,
        required: [true, 'A book must have a price']
    }
})

const Book = new mongoose.model('Book', bookSchema);

module.exports = Book;