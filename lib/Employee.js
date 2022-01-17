class Employee {
    constructor( name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
        

        
    }

    getRole() {
        return `Employee`;
    }

}




//How is it matching which name and email?

//     printInfo(data) {
//         console.log(`Employee Name: ${this.name}\n Employee ID: ${this.id}\n Employee Email: ${this.email}`)
//     }
// }

module.exports = Employee;