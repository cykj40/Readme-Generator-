// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
   {
    type:"input",
    name: "title",
    message: "What is the Name of your project?",
   },
   {
    type:"input",
    message: "Describe your project",
    name:"description",
   },
   {
    type: "input",
    message: "Please tell us about your project",
    name: "about",
   },
   {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
   },
   {
    type: "input",
    message: "What is the link to clone the repo?",
    name: "clone",
   },
   {
    type:"list",
    name: "license",
    message: "Please select the license you used for this project?",
    choices: [
        "MIT",
        "Apache",
        "Boost",
       ],
   },
   {
    type:"input",
    message: "Please enter any testing protocols you used for this project",
    name: "test",
    },
   {
    type: "input",
    name: "author",
    message: "what is your name?",
   },
   {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
   },
   {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
   },
   {
    type: "input", 
    name: "URL", 
    message: "Waht is the URL of the live site?",
   },
   {
    type: "input",
    name: "repo",
    message: "What is the URL of the GitHub repo?",
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
