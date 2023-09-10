const { Schema, model } = require("mongoose");

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: true
    }
});

module.exports = model("User", schema);