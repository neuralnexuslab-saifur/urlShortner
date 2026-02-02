const shortId = require("short-id")
const URL = require("../model/url.js")
//shortId.configure({ length: 8 })
async function handleGenerateNewShortUrl(req, res) {
    const body = req.body
    const shortString = shortId.generate()
    await URL.create({
        shortId: shortString,
        redirectUrl: body.url,
        visitHistory: []
    })
    return res.json({ str: shortString })
}

module.exports = {
    handleGenerateNewShortUrl
} 