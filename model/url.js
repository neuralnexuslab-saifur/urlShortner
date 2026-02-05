const { timeStamp } = require("console")
const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        timeStamp: {
            type: Number
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }


}, { timestamps: true }

)

const URL = mongoose.model("url", newSchema)

module.exports = URL