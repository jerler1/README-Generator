// TODO: Include packages needed for this application
const fs = require("fs");
const gm = require("./utils/generateMarkdown");
const confirmValidation = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const starting = [
  {
    type: "confirm",
    message: "Do you want to make a README file?",
    name: "confirmREADME",
    validate: confirmValidation.confirmValidation,
    default: true,
  },
];
// An array of objects.  Providing defaults for most questions.
// Asking for confirms for sections then providing when's to give the readme more flexibility.
const questions = [
  {
    type: "input",
    message: "What would you like your file name to be? (minus the .md)",
    name: "nameOfFile",
    default: "sample",
  },
  {
    type: "input",
    message: "Provide the title of your project.",
    name: "title",
    default: "Best Project",
  },
  {
    type: "confirm",
    message: "Do you want to make a Table of Contents?",
    name: "confirmTOC",
    default: true,
  },
  {
    type: "confirm",
    message: "Do you want to make a Description section?",
    name: "confirmDescription",
    default: true,
  },
  {
    type: "input",
    message: "Describe your project please.",
    name: "inputDescription",
    when: (choice) => choice.confirmDescription === true,
    default: "This is my project",
  },
  {
    type: "confirm",
    message: "Do you want to make a Installation section?",
    name: "confirmInstallation",
    default: true,
  },
  {
    type: "input",
    message: "Describe your installation process.",
    name: "installationDescription",
    when: (choice) => choice.confirmInstallation === true,
    default: "I typed this",
  },
  {
    type: "confirm",
    message: "Do you want to make a Usage section?",
    name: "confirmUsage",
    default: true,
  },
  {
    type: "input",
    message: "Describe how to use your program.",
    name: "usageDescription",
    when: (choice) => choice.confirmUsage === true,
    default: "This is a read me generator",
  },
  {
    type: "confirm",
    message: "Do you want to make a License section?",
    name: "confirmLicense",
    default: true,
  },
  {
    type: "list",
    message: "Which license do you want?",
    name: "chooseLicense",
    choices: [
      new inquirer.Separator(
        "Use the up and down arrows and enter to make a selection."
      ),
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "Apache",
      new inquirer.Separator(),
      "GNU",
    ],
    when: (choice) => choice.confirmLicense === true,
    default: "MIT",
  },
  {
    type: "confirm",
    message: "Are you allowing contributions?",
    name: "confirmContributing",
    default: true,
  },
  {
    type: "input",
    message: "How can people help contribute?",
    name: "contributing",
    when: (choice) => choice.confirmContributing === true,
    default: "Please check the github for information.",
  },
  {
    type: "confirm",
    message: "Do you want to make a Test section?",
    name: "confirmTest",
    default: true,
  },
  {
    type: "input",
    message: "Describe your testing process.",
    name: "testDescription",
    when: (choice) => choice.confirmTest === true,
    default: "I rerun the program A LOT.",
  },
  {
    type: "confirm",
    message: "Do you want to make a question section?",
    name: "confirmQuestions",
    default: true,
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    when: (choice) => choice.confirmQuestions === true,
    default: "abc@abc.com",
  },
  {
    type: "input",
    message: "What is your GitHub?",
    name: "gitHub",
    when: (choice) => choice.confirmQuestions === true,
    default: "https://www.github.com",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
// Made a function to confirm if you want to make a read me.
function init() {
  inquirer.prompt(starting).then((response) => {
    if (response.confirmREADME === false) {
      return;
    } else {
      askQuestions();
    }
  });
}
function askQuestions() {
  inquirer.prompt(questions).then((data) => {
    const fileName = data.nameOfFile;
    writeToFile(fileName, data);
  });
}
// Function call to initialize app
init();
