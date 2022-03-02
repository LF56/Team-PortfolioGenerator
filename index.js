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
