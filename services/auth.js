const jwt = require("jsonwebtoken")
const secret = "SaifurRahman73555#355#86"

const sessionIdManager = new Map()

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, secret)

}

function getUser(token) {
    console.log("token is ", token)
    if (!token) return null;
    try {
        const user = jwt.verify(token, secret);
        console.log("user in get user is ", user)
        return user
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}