class employee {
    constructor(passedName, passedNum) {
        this.name = passedName,
        this.num = passedNum
    }

    getName() {
        return `${this.name}`
    }

    getNum() {
        return `Phone Number: ${this.num}`
    }

    getRole() {
        return `employee`
    }
}

module.exports = employee