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
    return res.render("home", {
        id: shortString
    })
}

async function handleGetAnalyticsById(req, res) {
    const shortId = req.params.shortId
    console.log(shortId)
    const hist = await URL.findOne({ shortId })
    return res.json({ visits: hist.visitHistory })
}
module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalyticsById,
} 