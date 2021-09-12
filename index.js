const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderHTML = require('./lib/html')

const team = [];

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
   
]}
.then(answers => {
    const manager = new Manager (answers.managersName, answers.managersId, answers.managersEmail, answers.managerOfficeNumber);
    employees.push(manager);
    
});

function addEmployee(role) {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name",
            name: "employeesName"
        },
        {
            type: 'input',
            message: "Enter team memeber's ID number",
            name: "employeesId"
        },
        {
            type: 'input',
            message: "Enter team member's email address",
            name: "employeesEmail"
        },
        {
            type: 'input',
            message: "Enter intern's school ",
            name: "internsSchool",
            when: (role == 'intern')
        },
        {
            type: 'input',
            message: "Enter engineers Github ",
            name: "enginnersGithub",
            when: (role == 'engineer')
        }
    ]).then((answers)) => {
        const employee;
        if (role == 'intern') {
            employee = new Intern(answers.employeesName, answers.employeesId, answers.employeesEmail, answers.internsSchool);
        } else if (role == 'engineer') {
            employee = new Engineer(answers.employeesName, answers.employeesId, answers.employeesEmail, answers.enginnersGithub);
        }
        employees.push(employee);
    });
}

function renderHTML (employees) {
    
}