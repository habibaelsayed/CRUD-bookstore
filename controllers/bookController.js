const Book = require('./../models/bookModel');

exports.createBook = async (req, res) => {

    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({
            status: 'success',
            body: newBook
        }) ;
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            body: err
        })
    }
}

exports.getAllBooks = async (req, res) => {

    try{
        const books = await Book.find();
        res.status(200).json({
            status: 'success',
            results: books.length,
            body: books
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            body: err
        })
    }
}


exports.getBook = async (req, res) => {

    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            body: book
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            body: err
        })
    }
}


exports.updateBook = async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            status: 'success',
            body: book
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            body: err
        })
    }
}


exports.deleteBook = async (req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success'
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            body: err
        })
    }
}