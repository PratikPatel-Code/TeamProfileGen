const Employee = require("../lib/Employee.js");

// all employees regardless of position should return the following information
describe("Employee", () => {
    describe("initialize", () => {
        it("Should return the employee's name, id, and email",
            () => {
                const name = "employeeName";
                const id = "EmployeeID";
                const email = "EmplyoeeEmail";
                const employee = new Employee(name, id, email);
                expect(employee.name).toBe(name)
                expect(employee.id).toBe(id)
                expect(employee.email).toBe(email)
            })
    })

    // test fo getName()
    describe("getName()", () => {
        it("Should return the employee's name",
            () => {
                const name = "employeeName";
                const id = "EmployeeID";
                const email = "EmployeeEmail";
                const employee = new Employee(name, id, email);
                expect(employee.getName()).toBe(name)
            })
    })
})

// test for getID()
describe("getId()", () => {
    it("Should return the employee's id",
        () => {
            const name = "employeeName";
            const id = "EmployeeID";
            const email = "EmployeeEmail";
            const employee = new Employee(name, id, email);
            expect(employee.getId()).toBe(id)
        })
})

// test for getEmail()
describe("getEmail()", () => {
    it("Should return the employee's email",
        () => {
            const name = "employeeName";
            const id = "EmployeeID";
            const email = "EmployeeEmail";
            const employee = new Employee(name, id, email);
            expect(employee.getEmail()).toBe(email)
        })
})