//  a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}--brightgreen)<br />

  ## Description 
  ${answers.description}

  ## Table of Contents
 

  ## About
  ${answers.about}

  ## User Story

  ## Acceptance Criteria
  
  ## Screenshots
 
  ## Installation
  ${answers.installation}

  ## License
![badge](https://img.shields.io/badge/license-${answers.license}--brightgreen)
<br />
This application is licensed by ${answers.license}

## Test 
${answers.test}

## Contributers
${answers.contributers}

## Questions
${answers.questions}<br />
<br />
 email me ${answers.email}<br />
 <br />
 find me on Github,  [${answers.userName}](https://github.com/${answers.userName})<br />
<br /> 

This Readme was made by 🚀 ${answers.author} ⚡


`;
}

// exports module generateMarkdown
module.exports =generateMarkdown;
