// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
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
    message: "What is the user story?",
    name: "userStory",
   },
   {
    type: "Input",
    message: "What is the acceptance criteria?",
    name:"acceptanceCriteria",
   },
   {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
   },
   {
    type:"list",
    name: "license",
    message: "Please select the license you used for this project?",
    choices: [
       "Apache",
       "Academic",
       "GNU",
       "ISC",
       "MIT",
       "Mozilla",
       "Open" 
        
    ]  
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
   
  ]);
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
// Async function asks user questions and generate's responses and hopefully writes new READ.md
async function init() {
   try{
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    await writeFileAsync('./dist/README.md', generateContent);
    console.log('🚀 Wrote to README.md');
   } catch(err) {
    console.log(err)
   }
}


// Function call to initialize app
init();
