// Packages needed for this application.

const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { create } = require('domain');




const officeEmployees = [];
const officeEmployeesHTML = [];

let managerHTML = "";
let engineerHTML = "";
let internHTML = "";


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
///////////////
const nextQuestions = [
    {
        type: "checkbox",
        message: "What would you like to do next? (Select One.)",
        choices: ["Add Engineer", "Add Intern", "That's a wrap!"],
        name: "next"
    }
];
///////////////

// manager();
// runApp();

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



function engineer(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
    
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            // data.getGithub
           
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
            // data.school
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
            // return createTeamProfile();
            // createTeamProfile();
            writeToFile("./dist/index.html", createHTML(officeEmployeesHTML));
           
        }
    })
}

function createTeamProfile() {


        for (var i = 0; i < officeEmployees.length; i++) {

   
            if(officeEmployees[i].getRole() === "Manager") {

                managerHTML = `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>JS</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()}<i class="far fa-grin-beam"></i> </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item">Office Number: <a href="tel:${officeEmployees[i].officeNumber}">${officeEmployees[i].officeNumber}</a></li>
                </ul>
                </div>
                </div>
                
                
                `;

                // return managerHTML;
                officeEmployeesHTML.push(managerHTML);

            }

            if(officeEmployees[i].getRole() === "Engineer") {

                engineerHTML = 
                
                `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>JS</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()}<i class="far fa-grin-beam"></i> </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item">${officeEmployees[i].getGithub()}</li>
                </ul>
                </div>
                </div>
                
                
                `;

                // return engineerHTML;

                officeEmployeesHTML.push(engineerHTML);

               
            }


            if(officeEmployees[i].getRole() === "Intern") {

                internHTML = `
                
                <div class="avatar">
                <div class="letter-avatar">
                <h3>JS</h3>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h1>${officeEmployees[i].name}</h1>
                <h2>${officeEmployees[i].getRole()}<i class="far fa-grin-beam"></i> </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${officeEmployees[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${officeEmployees[i].email}">${officeEmployees[i].email}</a></li>
                <li class="list-group-item">School: ${officeEmployees[i].getSchool()}</li>
                </ul>
                </div>
                </div>
                
                
                `;

                // return internHTML;
                officeEmployeesHTML.push(internHTML);
                
            } else {

                console.log("Something is wrong.")

            }

            
    }
}

function createHTML(officeEmployeesHTML) {


    // for (var i = 0; i < officeEmployeesHTML.length; i++) {
    //     if(officeEmployeesHTML) {
    

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
    <div class="row row-cols-3">
    ${createTeamProfile(officeEmployeesHTML)}
    </div>
    </div>
    </main>

    </body>
    </html>
        
        
        `;

    
}
//     }
// }


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log("Your Team's Profile has been successfully generated! Locate it in the dist folder."));

        // runApp();
              

}

// function runApp(officeEmployees) {

//     writeToFile("./dist/index.html", createHTML(officeEmployees));
// }

manager();


