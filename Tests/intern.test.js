const Intern = require('../lib/intern.js')

describe("Intern", () => {
    describe("getName", () =>{
        it("should set a name", () => {
            const newIntern = new Intern("Jared","3","jared@fakeemail.com","KSU")
            expect(newIntern.name).toEqual("Jared")
        })
    })
    describe("getID", () => {
        it("should set an id", () => {
            const newIntern = new Intern("Jared","3","jared@fakeemail.com","KSU")
            expect(newIntern.id).toEqual("3")
        })
    })
    describe("getEmail", () => {
        it("should set an email", () => {
            const newIntern = new Intern("Jared","3","jared@fakeemail.com","KSU")
            expect(newIntern.email).toEqual("jared@fakeemail.com")
        })
    })
    describe("getSchool", () => {
        it("should set the school", () => {
            const newIntern = new Intern("Jared","3","jared@fakeemail.com","KSU")
            expect(newIntern.school).toEqual("KSU")
        })
    })
    describe("getRole", () => {
        it("should return the Intern role", () => {
            const newIntern = new Intern("Jared","3","jared@fakeemail.com","KSU")
            newIntern.getRole()
            expect(newIntern.role).toEqual("Intern")
        })
    })
})