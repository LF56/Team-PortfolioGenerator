//node requirements
const fs = require('fs');
const inquirer = require('inquirer');
// const generateHTML = require('./src/generateHTML');


//profile for team selections
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

//manager -head- prompts
inquirer
    .prompt([
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
            name: 'managerID',
            message: 'Enter Manager ID.',
            validate: managerID => {
                if (managerID) {
                  return true;
                } else {
                  console.log('Please enter manager ID.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter manager email address.',
            validate: managerEmail => {
                if (managerEmail) {
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

