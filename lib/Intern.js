const Employee = require("./Employee");

let initial = "";

class Intern extends Employee {
    constructor(name, id, email, school) {

        super( name, id, email );

        this.school = school;

        // initial = this.name.charAt(0).toUpperCase();

        const fullName = this.name.split(' ');
        initial = fullName.shift().charAt(0) + fullName.pop().charAt(0);


    }

    getInitial() {
        return initial.toUpperCase();
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