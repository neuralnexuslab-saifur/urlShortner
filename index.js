const express = require("express")
const app = express()
const urlRoute = require("./routes/url.js")
const URL = require("./model/url.js")
const { connectToMongoDb } = require("./connection.js")
const PORT = 8001
connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => console.log("mongo conntected Saifur"))
app.use(express.json())
app.get("/test", (req,res)=>{
    return res.end("<h1>Hey from server </h1>")
})
//Get Url linked with shortId and update visit History
app.get("/:shortId" ,async (req,res)=>{
    const shortId = req.params.shortId
const entry = await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{
    timeStamp: Date.now()
}}})
res.redirect(entry.redirectUrl)
})



app.use("/url", urlRoute)
app.listen(PORT, ()=> console.log("Server started listening at PORT "))