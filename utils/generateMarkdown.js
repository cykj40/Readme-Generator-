// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}--brightgreen)<br />

  ## Description 
  ${answers.description}

  ## Table of Contents
  -[Description](#description)
  -[about](#about)
  -[userStory](#userStory)
  -[Installation](#installation)
  -[License](#license)
  -[Test](#test)
  -[Find Me](#findMe)

  ## About
  ${answers.about}

  ## User Story
  ${answers.userStory}

 
  
  ## Installation
  ${answers.installation}

  ## License
![badge](https://img.shields.io/badge/license-${answers.license}--brightgreen)
<br />
This application is licensed by ${answers.license}

## Test 
${answers.test}

## Find Me 
To checkout more of my work, find me on Github [${answers.userName}](https://github.com/${answers.userName})<br />
<br /> 

This Readme was made by 🚀 ${answers.author} ⚡


`;
}


module.exports =generateMarkdown;
