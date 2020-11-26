// function to generate markdown for README
function generateMarkdown(data) {
  console.log( `
  
  ## Project Title :

  ${data.title}

  ## Description :

  ${data.Description}

  # Table Of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor](#Contributor)
  * [License](#License)
  * [Test](#Test)
  
  
  # Installation :

  ${data.Installation}

  # Usage :

  ${data.Usage}

  # Contributor :

  ${data.Contributor}

  # License :

  ${data.License}

  # Test :

  ${data.Test}

  ### This Project "${data.title}" Made by "${data.Name}"
`)
}

module.exports = generateMarkdown;
