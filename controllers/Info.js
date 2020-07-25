const  { Info } = require('../models')

exports.list = async function listInfo(req, res) {

    const info = await Info.find({})
    res.json(info)

};

exports.add = async function addInfo(req, res) {

    const info = await Info.create(req.body)
    res.json(info)

};

exports.delete = async function deleteInfo(req, res) {
    
    const { _id } = req.params;
    await Info.deleteOne({ _id: _id})
    res.json({ _id })

}

exports.update = async function updateInfo(req, res) {
    
    const info = req.params;
    await Info.update({ _id: _id})
    res.json({ _id })

}
