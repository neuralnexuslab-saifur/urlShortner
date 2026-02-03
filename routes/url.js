const express = require("express")
const { handleGenerateNewShortUrl, handleGetAnalyticsById } = require("../controller/url.js")
const router = express.Router()

router.post("/",handleGenerateNewShortUrl)

router.get("/analytics/:shortId",handleGetAnalyticsById)

module.exports = router  