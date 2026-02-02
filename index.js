const express = require("express")
const app = express()
const urlRoute = require("./routes/url.js")
const { connectToMongoDb } = require("./connection.js")
const PORT = 8001
connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("mongo conntected Saifur"))

app.use("/url", urlRoute)
app.listen(PORT, ()=> console.log("Server started listening at PORT "))