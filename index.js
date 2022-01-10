// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./assets/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projecttitle',
        message: 'What is the title of your project?',
        default() {
            return 'Readme for the following Project';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter some installation instructions. (if any)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information about your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Was there any contributors in your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there any test information you would like to add?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select one of the following licenses:',
        choices: [
            'Apache 2.0',
            'GNU GPLv3',
            'MIT',
            'ISC',
        ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Yay!");
        }
    } )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        // console.log(JSON.stringify(answers, null, ' '));
        writeToFile('Read-Me-Creator.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();