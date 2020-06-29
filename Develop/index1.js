var fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    message: "What is your GitHub username?",
    name: "username",
    type: "input",
  },
  {
    message: "What is your email address?",
    name: "email",
    type: "input",
  },
  {
    message: "What would you like to title this project?",
    name: "title",
    type: "input",
  },
  {
    message: "Could you provide a brief description?",
    name: "description",
    type: "input",
  },
  {
    message: "Are there any notes or steps for installation of this project?",
    name: "installation",
    type: "input",
  },
  {
    message: "How does the user run this program?",
    name: "usage",
    type: "input",
  },
  {
    message: "What kind of license would you like your project to have?",
    name: "license",
    type: "list",
    choices: ["MIT", "GPL 3.0", "BSD 3", "None"],
  },
  {
    message: "Who is contributing to this project?",
    name: "contributors",
    type: "input",
  },
  {
    message: "How does the user test this program?",
    name: "test",
    type: "input",
  },
  {
    message: "Are there any questions asked about this program?",
    name: "questions",
    type: "input",
  },
]
inquirer.prompt(questions)
  // function to write README file
  .then(function (response) {
    fs.writeFile("userREADME.md", generateMarkdown(response), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success! README was created.");
    });
  });


