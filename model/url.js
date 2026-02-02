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
    visitHistory : [{timeStamp :{
        type : String
    }}]

},
{timestamps:true}
)

const URL = mongoose.model("url",newSchema)

module.exports = URL