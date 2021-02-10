const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

teamArray = []

const validate = {
    name: input => input !==" "? true:"Please enter a name.",
    id: input => isNaN(input)?"ID must be numerical.":true,
    email: input => input == /[A-Za-z0-9_.-]/i+"@"+/[a-zA-Z0-9]/i+"."+/[a-zA-Z]/i? true:"Please enter a valid email address."
}

const promptManager = () =>
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team manager's name?",
            name:"name",
            validate:validate.name
        },
        {
            type:"input",
            message:"What is the team manager's id?",
            name:"id",
            validate:validate.id
        },
        {
            type:"input",
            message:"What is the team manager's email?",
            name:"email",
        },
        {
            type:"input",
            message:"What is the team manager's office number?",
            name:"officeNumber",
            validate:validate.id
        },
        {
            type:"list",
            message:"Which type of team member would you like to add?",
            choices:["Engineer", "Intern", "Finish building my team"],            
            name:"memberType"
        }
    ])  
    .then(function(answer){
        const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        teamArray.push(newManager)
        switch(answer.memberType){
            case "Engineer":
                promptEngineer()
                break
            case "Intern":
                promptIntern()
                break
            case "Finish building my team":
                endPrompt()
        }
       
    })
    
const promptEngineer = () =>
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the engineer?",
            name:"name",
            validate:validate.name
        },
        {
            type:"input",
            message:"What is the engineer's id?",
            name:"id",
            validate:validate.id
        },
        {
            type:"input",
            message:"What is the engineer's email?",
            name:"email",
        },
        {
            type:"input",
            message:"What is the engineer's GitHub username?",
            name:"githubUsername",
            validate:validate.name
        },
        {
            type:"list",
            message:"Which type of team member would you like to add?",
            choices:["Engineer", "Intern", "Finish building my team"],            
            name:"memberType",
        }
    ])
    .then(function(answer){
        const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.githubUsername)
        teamArray.push(newEngineer)
        switch(answer.memberType){
            case "Engineer":
                promptEngineer()
                break
            case "Intern":
                promptIntern()
                break
            case "Finish building my team":
                endPrompt()
        }
    })

    const promptIntern = () =>
    inquirer.prompt([
        {
            type:"input",
            message:"What is the intern's name?",
            name:"name",
            validate:validate.name
        },
        {
            type:"input",
            message:"What is the intern's id?",
            name:"id",
            validate:validate.id
        },
        {
            type:"input",
            message:"What is the intern's email?",
            name:"email",
        },
        {
            type:"input",
            message:"What school does the intern attend?",
            name:"school",
            validate:validate.name
        },
        {
            type:"list",
            message:"Which type of team member would you like to add?",
            choices:["Engineer", "Intern", "Finish building my team"],            
            name:"memberType"
        }
    ])
    .then(function(answer){
        const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
        teamArray.push(newIntern)
        switch(answer.memberType){
            case "Engineer":
                promptEngineer()
                break
            case "Intern":
                promptIntern()
                break
            case "Finish building my team":
                endPrompt()
        }
    })

const getHTMLModule = (file) => {
    return readFile(file, 'utf8')
}

async function endPrompt() {
    let Template = {
        Main: await getHTMLModule("./src/main.html"),
        Manager: await getHTMLModule("./src/manager.html"),
        Engineer: await getHTMLModule("./src/engineer.html"),
        Intern: await getHTMLModule("./src/intern.html")
    }

    let teamHTML = ''

    for (let employee of teamArray) {
        let html = Template[employee.constructor.name]
        .replace(/{% name %}/gi, employee.name)
        .replace(/{% id %}/gi, employee.id)
        .replace(/{% email %}/gi, employee.email)
        switch(employee.constructor.name) {
            case "Manager":
                html = html.replace(/{% officeNumber %}/gi, employee.officeNumber)
                break
            case "Engineer":
                html = html.replace(/{% githubUsername %}/gi, employee.githubUsername)
                break
            case "Intern":
                html = html.replace(/{% school %}/gi, employee.school)
                break
        }
        teamHTML += html
    }
    async function write(html) {
        let file = `team.html`
        let dir = "./dist"
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        await writeFile(`${dir}/${file}`, html)
        .then(() => console.log("Success!"))
        .catch((err) => console.error(err))
        return
    }

    let finalHTML = Template["Main"].replace(/{% employees %}/gi, teamHTML)
    write(finalHTML)
}
promptManager()