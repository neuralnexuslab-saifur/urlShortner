const User = require("../model/user.js")
const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../services/auth.js")
async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body
    await User.create({
        name,
        email,
        password
    })
    return res.render("home")
}

async function handleUserLogin(req, res) {
    const { name, email, password } = req.body
    const user = await User.findOne({ email, password })
    if (user) {

        const token = setUser(user)
        res.cookie("token", token)
        return res.redirect("/")
    } else {
        return res.render("login", { error: "Wrong user id or password" })
    }
    // await User.create({
    //     name,
    //     email,
    //     password
    // })

}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}