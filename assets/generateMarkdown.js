// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}

  # Description
  ${data.description}

  # Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#ccontributors)

  * [Testing](#testing)

  * [Questions?](#questions)

  # Installation
  In order for the application to run smoothly, dependencies added to this project: ${data.install}

  # Usage
  ${data.usage}

  # License 
  ${data.license}

  # Contributors
  ${data.contribution}

  # Testing
  If you would like to run tests, you need to know: 
  ${data.test}

  # Questions?
  Have any questions? Feel free to reach me @ my github: ${data.username} and email: ${data.email}.

`;
}

module.exports = generateMarkdown;