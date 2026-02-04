const express = require("express")
const { handleUserSignUp, handleUserLogin } = require("../controller/user")
const router = express.Router()

router.post("/", handleUserSignUp)

router.post("/login", handleUserLogin)
router.get("/signup", (req, res) => {
    console.log("in login page")
    return res.render("signup")
})

router.get("/login", (req, res) => {
    console.log("in login page")
    return res.render("login")
})

module.exports = router