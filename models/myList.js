const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const myListSchema = new Schema ({
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

const MyList = mongoose.model("MyList", myListSchema)

module.exports = MyList