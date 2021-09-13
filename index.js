const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


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
    employees.push(manager);
    
});

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
            employees.push(engineer);
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
            name: "internssId"
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
            employees.push(intern);
    });
}

function generateHTML(){
    fs.writeFileSync(generateTeamProfile, "")

    const runHtml = 
}