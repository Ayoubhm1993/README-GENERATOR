const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// array of questions for user
const questions = [
    {
        type:'input',
        name:'userName',
        messege:'What Is Your Github Username ?',
       
    },
    {
        type:'input',
        name:'title',
        messege:'What Is Your Project Title?',
       
    },
    {
        type:'input',
        name:'Description',
        messege:'What Is Your Project Description ?',
       
    },
    {
        type:'input',
        name:'Installation',
        messege:'What are Steps Needs To Your Project To Be Installed And Run ?',
       
    },
    {
        type:'input',
        name:'Usage',
        messege:'What Is Your Project Used For ?',
       
    },
    {
        type:'input',
        name:'License',
        messege:'What Is Your Project License ?',
       
    },
    {
        type:'input',
        name:'Contributor',
        messege:'What Is Your Project Contributor ?',
       
    },
    {
        type:'input',
        name:'Test',
        messege:'Provide Some "Runnig and working" Test ?',
       
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err)=>{
        if (err){console.log('error', err)};
    })
};

function init(){
     inquirer.prompt(questions)
    .then((data) => {
        
        writeToFile('./dist/README.md', data)
        console.log(data);
    }).then(()=> console.log('README Success')).catch(err =>{console.log(err)})

};

// function call to initialize program
init();
