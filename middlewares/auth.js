const { getUser } = require("../services/auth")

function checkForAuthentication(req, res, next) {
    const tokenCookie = String(req.cookies.token)
    req.user = null

    if (!tokenCookie)
        return next()

    const token = tokenCookie
    const user = getUser(token)
    req.user = user
    next()
}

function restrictTo(roles = []) {
    return function (req, res, next) {
        console.log(req.user, "user redirect to function", roles, req.user.role )
        if (!req.user) return res.redirect("/user/login")

        if (!roles.includes(req.user.role)) return res.end("Unauthorised")
        console.log("Passed Restric to Role ")
        return next()
    }
}

// async function restrictToLoggedInUsero0nly(req, res, next) {
//     console.log(req.headers)
//     const userUid = req.headers["authorization"]
//     if (!userUid) {
//         return res.redirect("user/login")
//     } else {
//         const token = userUid.split("Bearer ")[1]
//         const user = getUser(token)
//         if (!user) {
//             return res.redirect("/user/login")
//         } else {
//             req.user = user
//             next()
//         }
//     }
// }

// async function checkAuth(req, res, next) {
//     console.log(req.headers)
//     const userUid = req.headers["authorization"]
//     const token = userUid.split("Bearer ")[1]
//     const user = getUser(token)
//     req.user = user
//     next()


// }

module.exports = {
    checkForAuthentication,
    restrictTo
}