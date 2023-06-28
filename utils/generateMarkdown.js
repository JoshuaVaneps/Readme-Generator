// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// can use url of badge site here with licence variable in the url
function renderLicenseBadge(license) {
  var space = `${license}`;
  var replaced = space.replaceAll(" ", "-");
  return `<img src="https://img.shields.io/badge/license-${license}-red">`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `- [License](#license) - ${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
   license:  ${license}
   `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  - [Tests](#tests)
  - [Credits](#credits)
  
  ## Installation Instructions
  ${data.instructions}
  
  ## Usage Information 
  ${data.usage}
  
  ## Contribution Guidelines
  ${data.contribute}
  
  ## Questions
  Contact us with questions anytime through github or email.
  - Github: ${data.github}(github.com/${data.github})
  - Email: ${data.email} 
  
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}
  
  ## Credits 
  ${data.credits}`;
}

module.exports = generateMarkdown;
