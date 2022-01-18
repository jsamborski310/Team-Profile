const Employee = require("./Employee");

let initial = "";

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super( name, id, email );

        this.github = github;
        this.name = name;

        // initial = this.name.charAt(0).toUpperCase();

        const fullName = this.name.split(' ');
        initial = fullName.shift().charAt(0) + fullName.pop().charAt(0);


    }

    getInitial() {
        return initial.toUpperCase();
    }

    getIcon() {
        return `<i class="fas fa-laptop-code"></i>`
    }

    getGithub() {
        return `<i style="padding-right:10px; font-size:20px;" class="fab fa-github"></i><a href="https://github.com/${this.github}">${this.github}</a>`
    }


    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer;


