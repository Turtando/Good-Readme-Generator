function generateMarkdown(response) {
  return `

# ${response.title}\n

## Description ${response.description}

## Table of Contents 
* [Installation](#installation)\n * ${response.installation}
* [Usage](#usage)\n *${response.usage}
* [License](#license)\n *${response.license}
* [Contributors](#contributors)\n *${response.contributors}
* [Test](#test)\n *${response.test}
* [Questions](#questions)\n *${response.questions}

## ${response.installation}\n
## ${response.usage}\n
## ${response.license}\n
## ${response.contributors}\n
## ${response.test}\n
## ${response.questions}\n


  ![](https://img.shields.io/packagist/l/turtando/good-readme-generator)
  
  ![GitHub Logo](/images/logo.png)
  Format: ![Alt Text](url)
`;
}

module.exports = generateMarkdown;
