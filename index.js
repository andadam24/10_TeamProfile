const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateHTML = require('./generateHTML.js')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team = [];

function addManager () {

inquirer.prompt ([
    {
        type: 'input',
        message: "Enter manager's name",
        name: "managersName"
    },
    {
        type: 'input',
        message: "Enter manager's ID number",
        name: "managersId"
    },
    {
        type: 'input',
        message: "Enter manager's email address",
        name: "managersEmail"
    },
    {
        type: 'input',
        message: "Enter manager's office number",
        name: "managersOfficeNumber"
    },
   
])
.then(answers => {
    const manager = new Manager (answers.managersName, answers.managersId, answers.managersEmail, answers.managerOfficeNumber);
    team.push(manager);
    mainMenu();
    
});
}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name",
            name: "engineersName"
        },
        {
            type: 'input',
            message: "Enter engineer's ID number",
            name: "engineersId"
        },
        {
            type: 'input',
            message: "Enter engineers's email address",
            name: "engineersEmail"
        },
        {
            type: 'input',
            message: "Enter engineer's Github ",
            name: "enginnersGithub",
        }
    ]).then(answers => {
            const engineer = new Engineer(answers.engineersName, answers.engineersId, answers.engineersEmail, answers.engineersGithub);
            team.push(engineer);
            mainMenu();
    });
}

function addIntern() {

    inquirer.prompt([
        {
            type: 'input',
            message: "Enter intern's name",
            name: "internsName"
        },
        {
            type: 'input',
            message: "Enter interns's ID number",
            name: "internsId"
        },
        {
            type: 'input',
            message: "Enter intern's email address",
            name: "internsEmail"
        },
        {
            type: 'input',
            message: "Enter intern's school ",
            name: "internsSchool",
        }
    ]).then(answers => {
            const intern = new Intern(answers.internsName, answers.internsId, answers.internsEmail, answers.internsSchool);
            team.push(intern);
            mainMenu();
    });
};

function mainMenu(){
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do next?",
            choices: ["Add a Manager", "Add an Intern", "Add an Engineer", "Save Team"],
            name: 'userChoice'    
        }
    ]).then(answers => {
        switch (answers.userChoice){
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            default:
                saveFile(team);
        }
});
}
addManager();

function saveFile(teamArr){
    const html = generateHTML(teamArr)
   fs.writeFileSync("test.html", html)

  
}
