//node requirements
const fs = require('fs');
const inquirer = require('inquirer');
const teamMembers = [];
const generateHTML = require('./src/generateHTML');


//profile for team selections
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//manager -head- prompts
const generateManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'What is the teams name?',
            validate: teamName => {
                if (teamName) {
                    return true;
                } else {
                    console.log('Please enter your team name.');
                    return false;
                }
            }
        },
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
            message: 'Please enter the office number.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter office number');
                    return false;
                }
            }
        },
    ])
    .then(generateManager => {
        const {name, managerID, managerEmail, officeNumber, teamName} = generateManager;
        const manager = new Manager (name, managerID, managerEmail, officeNumber, teamName);

        teamMembers.push(manager);
        
    })
};
const addTeam = () => {
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
                member = new Engineer(employeeName, employeeID, employeeEmail, employeeGithub);
            } else if (addMoreMembers === 'Intern'){
                member = new Intern(employeeName, employeeID, employeeEmail, internSchool)
            }

            teamMembers.push(member);
            if (confirmAddEmployee) {
                console.log(teamMembers)
                return addTeam()
            } else {
                console.log(teamMembers)
                return writeToFile('index.html',teamMembers); 
            }
        })
};

generateManager()
.then(addTeam)


function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateHTML(data), (err) =>{
      if (err) throw err;
      console.log('This file has been saved.')
    }) 
  }