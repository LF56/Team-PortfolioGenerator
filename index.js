//node requirements
const fs = require('fs');
const inquirer = require('inquirer');
// const generateHTML = require('./src/generateHTML');


//profile for team selections
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

//engineer question promts
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the teams engineer?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your engineer name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Enter engineer ID?',
            validate: engineerID => {
                if (engineerID) {
                  return true;
                } else {
                  console.log('Please enter your engineer ID.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter engineer email address',
            validate: engineerEmail => {
                if (engineerEmail) {
                  return true;
                } else {
                  console.log('Please enter your engineer email address.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter engineer Github.',
            validate: engineerGithub => {
                if (engineerGithub) {
                  return true;
                } else {
                  console.log('Please enter your engineer Github.');
                  return false;
                }
              }
        },

    ])
    


// const questions = [
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the engineer name for this team?',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your engineer name.');
//           return false;
//         }
//       }
//     },
// ]
