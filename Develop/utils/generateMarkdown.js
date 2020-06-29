function generateMarkdown(response) {
  return `

# ${response.title}\n

# Description 
${response.description}\n

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
* [Contact](#contact)

# Installation\n 
${response.installation}\n

# Usage\n
${response.usage}\n

# License\n
${response.license}\n
![](https://img.shields.io/badge/build-readme-green)\n

# Contributors\n
${response.contributors}\n

# Test\n
${response.test}\n

# Questions\n
${response.questions}\n

## Contact
*To contact the developer, you may reach them at https://github.com/${response.username} on GitHub or, you email directly at ${response.email}.*

`;
}

module.exports = generateMarkdown;
