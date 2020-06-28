// array of questions for user
const questions = [
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
        name: "projectDescription",
        type: "input",
      },
      {
        message: "What kind of license would you like your project to have?",
        name: "license",
        type: "list",
        choices: ["MIT", "GPL 3.0", "BSD 3", "None"],
      },
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
