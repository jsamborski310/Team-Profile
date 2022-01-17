const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super( name, id, email );

        this.github = github;

    }


    getGithub() {
        return ` 
        
        <i style="padding-right:10px; font-size:20px;" class="fab fa-github"></i><a href="${this.github}>${this.github}</a>
        
        `
    }


    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer;


