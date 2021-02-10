const Manager = require("../lib/manager.js")

describe("Manager", () => {
    describe("getName", () =>{
        it("should set a name", () => {
            const newManager = new Manager("Tammy","3","tammy@fakeemail.com","216")
            expect(newManager.name).toEqual("Tammy")
        })
    })
    describe('getID', () => {
        it('should set an id', () => {
            const newManager = new Manager("Tammy","3","tammy@fakeemail.com","216")
            expect(newManager.id).toEqual('3')
        })
    })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newManager = new Manager("Tammy","3","tammy@fakeemail.com","216")
            expect(newManager.email).toEqual("tammy@fakeemail.com")
        })
    })
    describe('getOfficeNumber', () => {
        it('should set the office number', () => {
            const newManager = new Manager("Tammy","3","tammy@fakeemail.com","216")
            expect(newManager.officeNumber).toEqual("216")
        })
    })
    describe('getRole', () => {
        it('should return the Manager role', () => {
            const newManager = new Manager("Tammy","3","tammy@fakeemail.com","216")
            newManager.getRole()
            expect(newManager.role).toEqual("Manager")
        })
    })
})