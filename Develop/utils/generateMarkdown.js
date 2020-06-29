function generateMarkdown(response) {
  return `

# ${response.title}\n

## Description ${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## ${response.installation}\n
## ${response.usage}\n
## ${response.license}\n
## ${response.contributors}\n
## ${response.test}\n
## ${response.questions}\n



  ![GitHub Logo](/images/logo.png)
  Format: ![Alt Text](url)
`;
}

module.exports = generateMarkdown;
