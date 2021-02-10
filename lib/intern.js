const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school
        this.name = name
        this.id = id
        this.email = email 
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern