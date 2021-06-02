// const setup
const fs = require("fs");
const inquirer = require("inquirer");

// the require for the employee library
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

// initiating the start off app starting with manager since each team will need 1 manager
start()

function start() {
    inquirer.prompt([{
                type: "input",
                message: "What is the manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officenumber"
            },
            { //No manager to the list because team only has 1 manager
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ])
        .then(answers => {
            console.log(answers)
            const theManager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
            teamArray.push(theManager)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "None":
                    return finished()
            }
        })
}
// Questions to prompt if Engineer
function getEngineer() {
    inquirer.prompt([{
                type: "input",
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the team engineer's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the team engineer's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's Github username?",
                name: "github"
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ])
        .then(answers => {
            console.log(answers)
            const theEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamArray.push(theEngineer)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "None":
                    return finished()
            }
        })
}
// Questions to prompt if Intern
function getIntern() {
    inquirer.prompt([{
                type: "input",
                message: "What is the intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the team intern's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the team intern's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "school"
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ])
        .then(answers => {
            console.log(answers)
            const theIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamArray.push(theIntern)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "None":
                    return finished()
            }
        })
}

// If team is doing being built and none is selected

function finished() {
    console.log("finished")
    console.log(teamArray)
}