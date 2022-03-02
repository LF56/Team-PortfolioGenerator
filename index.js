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
