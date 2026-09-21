function login(username, password) {
    // Login validation
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
