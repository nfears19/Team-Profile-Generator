const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
        this.name = name
        this.id = id
        this.email = email 
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github
    }
}
module.exports = Engineer