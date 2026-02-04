const express = require("express")
const path = require("path")
const app = express()
const urlRoute = require("./routes/url.js")
const staticRoute = require("./routes/staticRouter.js")
const URL = require("./model/url.js")
const { connectToMongoDb } = require("./connection.js")
const PORT = 8001



connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => console.log("mongo conntected Saifur"))

app.set("view engine", "ejs") 
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/test", async (req,res)=>{
    const allUrls = await URL.find({})
    return res.render(`home`,{
        urls:allUrls
    })
})
//Get Url linked with shortId and update visit History
app.get("/:shortId" ,async (req,res)=>{
    const shortId = req.params.shortId
     console.log(shortId,"This is short")
const entry = await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{
    timeStamp: Date.now()
}}})
res.redirect(entry.redirectUrl)
})



app.use("/url", urlRoute)
app.use("/",staticRoute)
app.listen(PORT, ()=> console.log("Server started listening at PORT "))