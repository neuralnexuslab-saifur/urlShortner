
const express = require("express")
const router = express.Router()
const URL = require("../model/url.js")
const { restrictTo } = require("../middlewares/auth.js")

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    console.log("req is ", req.user)
    // if (!req.user) return res.redirect("user/login")
    const allUrls = await URL.find({})
    res.render("home", {
        urls: allUrls
    })
})

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    console.log("req is ", req.user)
    // if (!req.user) return res.redirect("user/login")
    const allUrls = await URL.find({ createdBy: req.user._id })
    res.render("home", {
        urls: allUrls
    })
})
module.exports = router