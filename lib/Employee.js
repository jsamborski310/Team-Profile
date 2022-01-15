class Employee {
    constructor( name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;

        
    }

//Add constructor here
//How is it matching which name and email?

    printInfo(data) {
        console.log(`Employee Name: ${this.name}\n Employee ID: ${this.id}\n Employee Email: ${this.email}`)
    }
}

module.exports = Employee;