const sessionIdManager = new Map()

function handleCreateSessionid(id, user) {
    return sessionIdManager.set(id, user)
}

function handleGetUserwithSessionId(id) {
    return sessionIdManager.get(id)
}

module.exports = {
    handleCreateSessionid,
    handleGetUserwithSessionId
}