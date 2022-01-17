// Packages needed for this application.

const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const employeeMarkdown = require('./lib/Employee');
const managerMarkdown = require('./lib/Manager');
const engineerMarkdown = require('./lib/Engineer');
const internMarkdown = require('./lib/Intern');


const officeEmployees = [];


// Array of questions for user input.


const managerQuestions = [
    {
        type: "input",
        message: "Provide the managers' first and last name.",
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
        message: "Provide the engineers' first and last name.",
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
        message: "Provide the interns' first and last name.",
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


function manager(data) {
    inquirer
    .prompt(managerQuestions)
    .then(function(data) {
        
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
          );
   
        officeEmployees.push(manager);
        
        nextQuestion();
         
    })
}

manager();

function engineer(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
    
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.officeNumber
          );
   
        officeEmployees.push(engineer);
       
        nextQuestion();
        
    })
}

function intern(data) {
    inquirer
    .prompt(internQuestions)
    .then(function(data) {

        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
          );
   
        officeEmployees.push(intern);

        nextQuestion();
        
    })
}

function nextQuestion(data) {
    inquirer
    .prompt(nextQuestions)
    .then(function(data,) {
       
        if(data.next.includes("Add Engineer")) {
            engineer();
            
            
            
        }
        else if(data.next.includes("Add Intern")) {
            intern();
               
            
        }
        else if(data.next.includes("That's a wrap!")) {
            return createTeamProfile();
        }
    })
}

function createTeamProfile() {


        for (var i = 0; i < officeEmployees.length; i++) {
   
            // console.log(officeEmployees.textContent = `Employee Name: ${officeEmployees[i].name}\n Employee ID: ${officeEmployees[i].id}\n `); 
            
            console.log(`Office Employees: ${officeEmployees}`);
            
            
    }
}



/////////////////

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log("Your Team's Profile has been successfully generated! Locate it in the Output folder."))

}

// Initializing application.

function runApp(data) {
    
        // writeToFile("./dist/index.html", employeeMarkdown(data));

        console.log("Printing");


    
}

// How to pull in getRole based on selection?
// How is it connecting the employee files into the index.js?
// Whenever I call it, it appears as not defined. Tried getGihub(), getGithub(Engineer). Also gave it a const. 
// Constructor displays "new Manager" as undefined.