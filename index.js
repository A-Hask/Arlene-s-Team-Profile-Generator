const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/generateTeam.js');
const teamMembers = [];
const idArray = [];

function app() {
    console.log('Welcome to the Team Profile Generator!');
    createManager();
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: async (input) => {
                    if (input.length < 2) {
                        console.log(' <-- Name must have at least 2 characters');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
                validate: async (email) => {
                    return emailValidator.validate(email)
                }
        
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
            }
        ])
            .then((data) => {
                const manager = new Manager(
                    data.managerName,
                    data.id,
                    data.email,
                    data.officeNumber,
                )
                teamMembers.push(manager);
                idArray.push(data.id);
                buildTeam();
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'anotherEmployee',
                        message: 'Would you like to add another team member?',
                        choices: ["Engineer", "Intern", "No thank you"]
                    }
                ])
            })

    }
    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: async (input) => {
                    if (input.length < 2) {
                        console.log(' <-- Name must have at least 2 characters');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                validate: async (email) => {
                    return emailValidator.validate(email)
                }
        
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: async (input) => {
                    if (input.length < 2) {
                        console.log(' <-- Name must have at least 2 characters');
                        return false;
                    }
                    return true;
                }
            }
        ])
            .then((data) => {
                const engineer = new Engineer(
                    data.engineerName,
                    data.id,
                    data.email,
                    data.github,
                )
                teamMembers.push(engineer);
                idArray.push(data.id);
                buildTeam();
            })
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: async (input) => {
                    if (input.length < 2) {
                        console.log(' <-- Name must have at least 2 characters');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
                validate: async (email) => {
                    return emailValidator.validate(email)
                }
        
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does this intern attend?",
            }
        ])
            .then((data) => {
                const intern = new Intern(
                    data.internName,
                    data.id,
                    data.email,
                    data.school,
                )
                teamMembers.push(intern);
                idArray.push(data.id);
                buildTeam();
            })
    }
}
function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    } fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
}
app();