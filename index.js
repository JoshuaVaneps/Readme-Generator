// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Give me a detailed description of your project? please try and answer, Why did you build this project and what did you learn?",
    name: "description",
  },
  {
    type: "input",
    message: "Give me detailed installtion instructions for your project",
    name: "instructions",
  },
  {
    type: "input",
    message: "Please explain how to use your website/application ",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please give detailed guidelines for how people should contribute to this project and what guidelines and conventions they should follow in contributing",
    name: "contribute",
  },
  {
    type: "input",
    message:
      "Did anyone else help you with this project, if so please list below if not please enter None",
    name: "credits",
  },
  {
    type: "input",
    message: "How would you instruct someone to test your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "please provide your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "please provide your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Which license would you like",
    name: "license",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      'BSD 2-clause "Simplified" license',
      'BSD 3-clause "New" or "Revised" license',
      "BSD 3-clause Clear license",
      "BSD Zero-Clause license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.error("Error appending to file:", error)
      : console.log("Data appended to file successfully.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(`${answers.name}-ReadMe.md`, generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
