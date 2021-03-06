// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        case 'APACHE 2.0':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        case 'GPL 3.0':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        case 'BSD 3':
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        case 'None':
            return ""
    }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return `Licensed under the [MIT](./licenses/mit.txt) license.`
        case 'APACHE 2.0':
            return `Licensed under the [APACHE 2.0](./licenses/apache.txt) license.`
        case 'GPL 3.0':
            return `Licensed under the [GPL 3.0](./licenses/gpl.txt) license.`
        case 'BSD 3':
            return `Licensed under the [BSD 3](./licenses/bsd.txt) license.`
        case 'None':
            return ""
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Badges

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command: 

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;