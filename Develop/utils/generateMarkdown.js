// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  ##${data.title}

  ## Description :

  ${data.Description}

  # Table Of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor](#Contributor)
  * [License](#License)
  * [Test](#Test)
  
  
  # Installation :

  To install this app follow this :  ${data.Installation}

  # Usage :

  ${data.Usage}
  ![screen-shot](../images/screenshot.JPG)

  # Contributor :
   
  Email: ${data.Email}
  ${data.Contributor}


  # License :

  ${data.License}

  # Test :

  ${data.Test}

  # Questions :

  If you have any question , contact me : ${data.Email}

  # This Project "${data.title}" Made by "${data.userName}"
`
}

module.exports = generateMarkdown;
