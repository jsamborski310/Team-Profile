const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {


        super( name, id, email );

        this.name = name;
        this.github = github;
       

    }

    getInitial() {

        const fullName = this.name.split(' ');
        const initial = fullName.shift().charAt(0).toUpperCase() + fullName.pop().charAt(0).toUpperCase();
       
        return initial;
    }

    getIcon() {
        return `<i class="fas fa-laptop-code"></i>`
    }

    getGithub() {
        return `<i style="padding-right:10px; font-size:20px; width:30px;" class="fab fa-github"></i><a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`
    }


    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer;


