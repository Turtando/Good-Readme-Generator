var fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    message: "GitHub username please?",
    name: "username",
    type: "input",
  },
  {
    message: "Email address?",
    name: "email",
    type: "input",
  },
  {
    message: "What would you like to title this project?",
    name: "projectTitle",
    type: "input",
  },
  {
    message: "Could you provide a brief description?",
    name: "description",
    type: "input",
  },
  {
    message: "What kind of license would you like your project to have?",
    name: "license",
    type: "list",
    choices: ["MIT", "GPL 3.0", "BSD 3", "None"],
  },
])
.then(function(userAnswers){
	var 
	fs.writeFile("README.md", JSON.stringify(generatedData, null, function (err) {
		if (err) {
			return console.log(err)
		}
		console.log("README successfully generated.")
	})
})

function writeToFile(fileName, data) {}

function init() {}

init();
