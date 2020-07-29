const  { MyList } = require('../models')

exports.list = async function listMyBooks(req, res) {

    const myList = await MyList.find({})
    res.json(myList)

};

exports.add = async function addMyBook(req, res) {

    const myList = await MyList.create(req.body)
    res.json(myList)

};

exports.delete = async function deleteMyBook(req, res) {
    
    const { _id } = req.params;
    await MyList.deleteOne({ _id: _id})
    res.json({ _id })

};
