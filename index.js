let inquirer = require('inquirer');
let fs = require('fs');
const generateLogo = require('./lib/generateLogo');
const { error } = require('console');

const questions = [
    {
        type: 'input',
        message: 'Please enter a 3 character company name/abbreviation.',
        name: 'text'
    },
    {
        type: 'list',
        message: 'What shape would you like to use for your logo?',
        name: 'shape',
        choices: ['triangle', 'circle', 'rectangle']
    },
    {
        type: 'input',
        message: 'Please enter a color or color code for the company name.',
        name: 'color'
    },
    {
        type: 'input',
        message: 'Please enter a color or color code for the background of the shape.',
        name: 'background'
    }
]

function writeLogo(answers) {
    console.log(answers);
    fs.writeFile('logo.svg', answers, (err) => err ? console.error(err) : console.log('Logo generated successfully!'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeLogo(generateLogo(answers))
    })
}

init()