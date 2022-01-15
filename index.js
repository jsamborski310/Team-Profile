// Packages needed for this application.

const inquirer = require('inquirer');
const fs = require('fs');
const employeeMarkdown = require('./lib/Employee');
const managerMarkdown = require('./lib/Manager');
const engineerMarkdown = require('./lib/Engineer');
const internMarkdown = require('./lib/Intern');



// Array of questions for user input.

const employeeQuestions = [
    {
        type: "input",
        message: "Provide your first and last name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter your employee ID number.",
        name: "id",
       
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
];


const managerQuestions = [
    {
        type: "input",
        message: "Provide the managers' first and last name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter managers' employee ID number.",
        name: "id",
       
    }, 
    {
        type: "input",
        message: "What is the managers' email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the managers' office number?",
        name: "officeNumber",
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Provide the engineers' first and last name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter employee ID number.",
        name: "id",
       
    }, 
    {
        type: "input",
        message: "What is the engineers' email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the engineers' GitHub link.",
        name: "github",
    }
];

const internQuestions = [
    {
        type: "input",
        message: "Provide the interns' first and last name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter employee ID number.",
        name: "id",
       
    }, 
    {
        type: "input",
        message: "What is the interns' email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What school did the intern attend?",
        name: "school",
    }
];
///////////////
const nextQuestions = [
    {
        type: "checkbox",
        message: "What would you like to do next? (Select One.)",
        choices: ["Add Engineer", "Add Intern", "That's a wrap!"],
        name: "next",
    }
];
///////////////



// Initializing application.

function init() {
    inquirer
    .prompt(employeeQuestions)
    .then(function(data) {
       
        manager();
    })

}

init();

function manager(data) {
    inquirer
    .prompt(managerQuestions)
    .then(function(data) {
        
        nextQuestion();
         
    })
}


function engineer(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
    
        nextQuestion();
        
    })
}

function intern(data) {
    inquirer
    .prompt(internQuestions)
    .then(function(data) {
    
        nextQuestion();
        
    })
}

function nextQuestion(data) {
    inquirer
    .prompt(nextQuestions)
    .then(function(data) {
       
        if(data.next.includes("Add Engineer")) {
            engineer();
        }
        else if(data.next.includes("Add Intern")) {
            intern();
        }
        else if(data.next.includes("That's a wrap!")) {
            return runApp();
        }
    })
}

/////////////////

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log("Your Team's Profile has been successfully generated! Locate it in the Output folder."))

}

// Initializing application.

function runApp(data) {
    
        writeToFile("./dist/index.html", employeeMarkdown(data));

        console.log("Printing");


    
}


// Build a new constructor on the individual js files: (const Info = New...). If it exists, push it.