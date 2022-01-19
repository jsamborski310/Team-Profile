const Employee = require("./Employee");

let initial = "";

class Manager extends Employee {
    constructor( name, id, email, officeNumber) {

        

        super( name, id, email );

        this.name = name;
        this.officeNumber = officeNumber;

        
        const fullName = this.name.split(' ');
        initial = fullName.shift().charAt(0).toUpperCase() + fullName.pop().charAt(0).toUpperCase();
       

    }

    getInitial() {
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