const express = require("express")
const { handleGenerateNewShortUrl } = require("../controller/url.js")
const router = express.Router()

router.post("/",handleGenerateNewShortUrl)

module.exports = router  