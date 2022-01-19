const Employee = require("./Employee");

class Manager extends Employee {
    constructor( name, id, email, officeNumber) {
 
        super( name, id, email );

        this.name = name;
        this.officeNumber = officeNumber;


    }

    getInitial() {

        const fullName = this.name.split(' ');
        const initial = fullName.shift().charAt(0).toUpperCase() + fullName.pop().charAt(0).toUpperCase();

        return initial;
    }

    getIcon() {
        return `<i class="far fa-grin-beam"></i>`
    }

    getRole() {
        return "Manager";
    }
}



module.exports = Manager;