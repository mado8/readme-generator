// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// prompts to generate README based on user input
const questions = [
  // prompt for project title
  {
    type: 'input',
    name: 'title',
    message: 'Enter in Your project title.',
  },
  // prompt for quick summart
  {
    type: 'input',
    name: 'summary',
    message: 'Enter a quick summary of your project.',
  },
  // prompt for description
  {
    type: 'input',
    name: 'description',
    message:
      'Enter in a description of the project. \n - motivation? \n - why did you build this project? \n - what problem does it solve? \n - what did you learn? \n',
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
  {
    type: 'input',
    name: 'application',
    message: 'Insert a link to a gif or image of the application',
  },
  // prompt for license
  {
    type: 'list',
    name: 'license',
    message: 'Choose your license.',
    choices: [
      'mit',
      'apache-2.0',
      'boost',
      'bsd-3',
      'bsd-2',
      'eclipse',
      'gnu-gpl-3',
      'ibm',
      'mozilla',
      'unlicense',
      'wtfpl',
      'zlib',
      'sil',
      'artistic',
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
]

const createBadge = (license) => {
  switch (license) {
    case 'mit':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) </br> https://opensource.org/licenses/MIT'
    case 'apache-2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) </br> https://opensource.org/licenses/Apache-2.0'
    case 'boost': 
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg) </br> https://www.boost.org/LICENSE_1_0.txt'
    case 'bsd-3': 
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg) </br> https://opensource.org/licenses/BSD-3-Clause'
    case 'bsd-2':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg) </br> https://opensource.org/licenses/BSD-2-Clause'
    case 'eclipse': 
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg) </br> https://opensource.org/licenses/EPL-1.0'
    case 'gnu-gpl-3': 
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) </br> https://www.gnu.org/licenses/gpl-3.0'
    case 'ibm': 
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) </br> https://opensource.org/licenses/ISC'
    case 'mozilla': 
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg) </br> https://opensource.org/licenses/MPL-2.0'
    case 'unlicense': 
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg) </br> http://unlicense.org/'
    case 'wtfpl': 
      return '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg) </br> http://www.wtfpl.net/about/'
    case 'zlib': 
      return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg) </br> https://opensource.org/licenses/Zlib'
    case 'sil': 
      return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg) </br> https://opensource.org/licenses/OFL-1.1'
    case 'artistic': 
      return '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg) </br> https://opensource.org/licenses/Artistic-2.0'
  }
}

// TODO: Create a function to write README file
const generateReadme = (answers) => {
  return `
# ${answers.title}
${answers.summary}
    
</br>

## Description
${answers.description}
   
</br>

## Table of Contents
- [ Description. ](#Description)</br>
- [ Installation. ](#Installation)</br>
- [ Usage. ](#Usage)</br>
- [ Application. ](#application)</br>
- [ Contribute. ](#Contribute)</br>
- [ Tests. ](#Tests)</br>
- [ Questions. ](#Questions)</br>
    
</br>

## Installation
${answers.installation}
   
</br> 

## Usage
${answers.usage}

</br> 

## Application
${answers.application}

</br> 

## License
${createBadge(answers.license)}
    
</br>

## Contribute
${answers.contribute}
 
</br>

## Tests
${answers.tests}

</br>

## Questions
Visit my other projects https://github.com/${answers.github} </br>
Contact me at ${answers.email}
  `
}
// TODO: Create a function to initialize app
function createReadMe() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      fs.writeFileSync('readme/README.md', generateReadme(answers))
    })
    .catch((err) => console.error(err))
}

// Function call to initialize app
createReadMe()
