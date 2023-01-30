const employee = require("./employee")
class manager extends employee {
    constructor(name, num, email) {
        super(name, id, email)
    }

    getRole() {
        return "manager"
    }
}

module.exports = manager