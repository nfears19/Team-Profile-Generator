const Engineer = require('../lib/engineer.js')

describe("Engineer", () => {
    describe("getName", () => {
        it("should set a name", () => {
            const newEngineer = new Engineer("Grace", "2", "grace2@email.com", "graceengineer")
            expect(newEngineer.name).toEqual("Grace")
        })
        it('should throw an error if provided no name', () => {
            const cb = () => new Engineer();
            expect(cb).toThrow();
        })
    })
    describe("getID", () => {
        it("Should set and id", () => {
            const newEngineer = new Engineer("Joe", "2", "grace2@email.com", "graceengineer")
            expect(newEngineer.id).toEqual("2")
        })
        it("should throw an error if no number provided", () => {
            const cb = () => new Engineer();
            expect(cb).toThrow();
        })
        describe("getEmail", () => {
            it("should set an email", () => {
                const newEngineer = new Engineer("Grace", "2", "grace2@email.com", "graceengineer")
                expect(newEngineer.email).toEqual("grace@email.com")
            })
        describe("getGithub", () => {
            it("should set the GitHub username", () => {
                const newEngineer = new Engineer("Grace", "2", "grace2@email.com", "graceengineer")
                expect(newEngineer.github).toEqual("graceengineer")
            })
        })
        })
        describe("getRole", () => {
            it("should return the employee role", () => {
                const newEngineer = new Engineer("Grace", "2", "grace2@email.com", "graceengineer")
                newEmployee.getRole()
                expect(newEmployee.role).toEqual("Employee")
            })
        })
    })
})