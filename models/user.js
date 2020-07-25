const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    avatar: {
        type: Boolean,
        required: true,
        default: false
    },
    
})

const User = mongoose.model("User", userSchema)

module.exports = User