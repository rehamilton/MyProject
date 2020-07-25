const  { Book } = require('../models')

exports.list = async function listBooks(req, res) {

    const books = await Book.find({})
    res.json(books)

};

exports.add = async function addBook(req, res) {

    const book = await Book.create(req.body)
    res.json(book)

};

exports.delete = async function deleteBook(req, res) {
    
    const { _id } = req.params;
    await Book.deleteOne({ _id: _id})
    res.json({ _id })

};
