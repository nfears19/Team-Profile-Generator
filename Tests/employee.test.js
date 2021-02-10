const Employee = require("../lib/employee.js")

    describe("Employee", () => {
        describe("getName", () => {
            it("Should set a name", () => {
                const newEmployee = new Employee("Tyler", "1", "tyler@email.com")
                expect(newEmployee.name).toEqual("Tyler")
            })
            it("should throw an error if provided no name", () => {
                const cb = () => new Employee();
                expect(cb).toThrow();
            })
        })
    })
    describe("getID", () => {
        it("Should set and id", () => {
            const newEmployee = new Employee("Tyler", "1", "tyler@email.com")
            expect(newEmployee.id).toEqual("1")
        })
        it ('should throw an error if no number provided', () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        })
    describe("getEmail", () => {
        it("should set an email", () => {
            const newEmployee = new Employee("Tyler", "1", "tyler@email.com")
            expect(newEmployee.email).toEqual("tyler@email.com")
        })
    })
    describe("getRole", () => {
        it("should return the employee role", () => {
            const newEmployee = new Employee("Tyler", "1", "tyler@email.com")
            newEmployee.getRole()
            expect(newEmployee.role).toEqual("Employee")
        })
    })
})