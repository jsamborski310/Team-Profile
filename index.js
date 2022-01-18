// Packages needed for this application.

const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const officeEmployees = [];
let officeEmployeesHTML = "";


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
        name: "id"
       
    }, 
    {
        type: "input",
        message: "What is the managers' email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the managers' office number?",
        name: "officeNumber"
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
        name: "id"
       
    }, 
    {
        type: "input",
        message: "What is the engineers' email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the engineers' GitHub link.",
        name: "github"
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
        name: "id"
       
    }, 
    {
        type: "input",
        message: "What is the interns' email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What school did the intern attend?",
        name: "school"
    }
];

const nextQuestions = [
    {
        type: "checkbox",
        message: "What would you like to do next? (Select One.)",
        choices: ["Add Engineer", "Add Intern", "That's a wrap!"],
        name: "next"
    }
];



// Manager Questions

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



// Engineer Questions

function engineer(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
    
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
           
          );   

        officeEmployees.push(engineer);
       
        nextQuestion();
        
    })
}



// Intern Questions

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



// Displays the correct set of questions based on User selection. 
// If nothing else to add, writes index.html

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
            
            writeToFile("./dist/index.html", createHTML());
           
        }
    })
}


// Creates HTML card depending on employee role.

function createTeamProfile() {


        for (var i = 0; i < officeEmployees.length; i++) {

   
            if(officeEmployees[i].getRole() === "Manager") {

                officeEmployeesHTML += `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>${officeEmployees[i].getInitial()}</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header manager-card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()}  ${officeEmployees[i].getIcon()} </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item"><i class="fas fa-envelope"></i> <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item"><i class="fas fa-phone-volume"></i> <a href="tel:${officeEmployees[i].officeNumber}">${officeEmployees[i].officeNumber}</a></li>
                </ul>
                </div>
                </div>
                
                
                `;

            }

            else if(officeEmployees[i].getRole() === "Engineer") {

                officeEmployeesHTML += 
                
                `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>${officeEmployees[i].getInitial()}</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header engineer-card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()} ${officeEmployees[i].getIcon()} </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item"><i class="fas fa-envelope"></i> <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item">${officeEmployees[i].getGithub()}</li>
                </ul>
                </div>
                </div>
                
                
                `;
                  
            }


            else if(officeEmployees[i].getRole() === "Intern") {

                officeEmployeesHTML += `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>${officeEmployees[i].getInitial()}</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header intern-card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()} ${officeEmployees[i].getIcon()} </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item"><i class="fas fa-envelope"></i> <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item"><i class="fas fa-graduation-cap"></i> ${officeEmployees[i].getSchool()}</li>
                </ul>
                </div>
                </div>
                
                
                `;

                
            } else {

                console.log("Something is wrong.")

            }   
    }

    return officeEmployeesHTML;
}



// Creates full HTML

function createHTML(officeEmployees) {


    return `
    
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">

    <link href="/dist/styles.css" rel="stylesheet">

    </head>

    <body>

    <header>
    <h1>Our Team</h1>
    </header>

    <main>
    <div class="container">
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
    ${createTeamProfile(officeEmployees)}
    </div>
    </div>
    </main>

    </body>
    </html>
        
        
        `;

    
}



// Sets Up to print HTML

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log("Your Team's Profile has been successfully generated! Locate it in the dist folder."));


}



// Initializes application with first set of questions. 

manager();


