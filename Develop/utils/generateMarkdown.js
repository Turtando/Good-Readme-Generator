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

# Contributors\n
${response.contributors}\n

# Test\n
${response.test}\n

# Questions\n
${response.questions}\n

# Contact\n
To reach out for more support, contact ${username} on GitHub or, you may email them at ${email}. 

  ![](https://img.shields.io/badge/build-readme-green)
  ![](../Assets/GitHub_Logo_White)
`;
}

module.exports = generateMarkdown;
