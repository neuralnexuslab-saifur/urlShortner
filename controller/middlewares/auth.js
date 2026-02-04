const { handleGetUserwithSessionId } = require("../../services/auth")

async function restrictToLoggedInUsero0nly(req, res, next) {
    const userUid = req.cookies.uid
    if (!userUid) {
        return res.redirect("user/login")
    } else {
        const user = handleGetUserwithSessionId(userUid)
        if (!user) {
            return res.redirect("/user/login")
        } else {
            req.user = user
            next()
        }
    }
}


module.exports = {
    restrictToLoggedInUsero0nly
}