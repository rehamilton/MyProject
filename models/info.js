const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const infoSchema = new Schema ({
    userId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    myList: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Info = mongoose.model("Info", infoSchema)

module.exports = Info