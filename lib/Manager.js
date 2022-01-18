const Employee = require("./Employee");

let initial = "";

class Manager extends Employee {
    constructor( name, id, email, officeNumber) {

        super( name, id, email );

        this.officeNumber = officeNumber;

        // initial = this.name.charAt(0).toUpperCase();


        const fullName = this.name.split(' ');
        initial = fullName.shift().charAt(0) + fullName.pop().charAt(0);


    }

    getInitial() {
        return initial.toUpperCase();
    }

    getIcon() {
        return `<i class="far fa-grin-beam"></i>`
    }

    getRole() {
        return "Manager";
    }
}



module.exports = Manager;