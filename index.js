//node requirements
const fs = require('fs');
const inquirer = require('inquirer');
const teamMembers = [];
const generateHTML = require('./src/generateHTML');


//profile for team selections
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

//manager -head- prompts
const generateManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter Manager ID.',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Please enter manager ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter manager email address.',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter manager email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office phone number.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter office phone number');
                    return false;
                }
            }
        },
    ])
};
const addTeam = teamData => {
    console.log(`
  =================
  Add a Team Member
  =================
  `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addMoreMembers',
                message: 'What is your employees role?',
                choices: ['Engineer', 'Intern'],

            },

            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the name of your employee?',
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log('You need to enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Provide a employee ID.',
                validate: employeeID => {
                    if (employeeID) {
                        return true;
                    } else {
                        console.log('You need to enter an employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Provide a employee email address.',
                validate: employeeEmail => {
                    if (employeeEmail) {
                        return true;
                    } else {
                        console.log('You need to enter an employee email');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeGithub',
                message: 'Provide a employee Github account',
                when:(input) => input.addMoreMembers === "Engineer",
                validate: employeeGithub => {
                    if (employeeGithub) {
                        return true;
                    } else {
                        console.log('You need to enter an employee Github');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Provide a school for the intern.',
                when:(input) => input.addMoreMembers === "Intern",
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log('You need to enter a school');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
        ])
        .then(memberInformation => {
            let {employeeName, employeeEmail, employeeID, employeeGithub, internSchool, addMoreMembers, confirmAddEmployee} = memberInformation;
            let member ;

            if (addMoreMembers === 'Engineer'){
                employee = new Engineer (employeeName, employeeEmail, employeeID, employeeGithub);
            } else if (addMoreMembers === 'Intern'){
                employee = new Intern (employeeName, employeeEmail, employeeID, internSchool)
            }
        }


};

