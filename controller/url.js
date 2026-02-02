const shortId = require("short-id")
//shortId.configure({ length: 8 })
async function handleGenerateNewShortUrl(req, res) {
    const shortString = shortId.generate()
    return res.json({ str: shortString })
}

module.exports = {
    handleGenerateNewShortUrl
}