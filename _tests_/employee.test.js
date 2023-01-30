const { exportAllDeclaration } = require("@babel/types")
const { default: test } = require("node:test")
const employee = require("../lib/employee.js")

test("employee name", () => {
    const _employee = new employee("Youssoupha", "6463018836")
    expect(_employee.name).toBe("Youssoupha")
})

test("employee number", () => {
    const _employee = new employee("Youssoupha", "6463018836")
    expect(_employee.num).toBe("Youssoupha")
})