const Employee = require("./Employee");

let initial = "";

class Intern extends Employee {
    constructor(name, id, email, school) {

       

        super( name, id, email );

        this.name = name;
        this.school = school;


        const fullName = this.name.split(' ');
        initial = fullName.shift().charAt(0).toUpperCase() + fullName.pop().charAt(0).toUpperCase();



    }

    getInitial() {
        return initial;
    }

    getIcon() {
        return `<i class="far fa-keyboard"></i>`
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;