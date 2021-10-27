// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown')

// prompts to generate README based on user input
const questions = [
        // prompt for project title
        {
          type: 'input',
          name: 'title',
          message: 'Enter in Your project title.',
        },
        // prompt for description
        {
          type: 'input',
          name: 'description',
          message: 'Enter in a description of the project. \n - motivation? \n - why did you build this project? \n - what problem does it solve? \n - what did you learn?',
        },
        // prompt for installation
        {
          type: 'input',
          name: 'installation',
          message: 'Enter instructions on how to install project.',
        },
        // prompt for usage
        {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information.',
        },
        // prompt for license
        {
          type: 'list',
          name: 'license',
          message: 'Choose your license.',
          choices: 
            [
            'afl-3.0','apache-2.0','artistic-2.0', 'bsl-1.0', 'bsd-2-clause',
            'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0',
            'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0',
            'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 
            'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'
            ],
        },
        // prompt for contributing
        {
          type: 'input',
          name: 'contribute',
          message: 'Enter contribution guidelines.',
        },
        // promt for tests
        {
          type: 'input',
          name: 'tests',
          message: 'Provide examples on how to run tests here.',
        },
        // prompts for questions section
        // prompt for github username
        {
          type: 'input',
          name: 'github',
          message: 'Enter your github username here.',
        },   
        // prompt for email
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email here.',
        },   
];

// TODO: Create a function to write README file
const writeToFile = () => {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile()
      });
}

// Function call to initialize app
init();
