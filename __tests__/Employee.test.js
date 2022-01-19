const Employee = require("../lib/Employee");

describe("Employee", () => {

    const name = "Juanita Samborski";
    const id = 23;
    const email = "juanita@breakthroughwebsite.com";
   
    const employee = new Employee(name, id, email);


        describe("getName",() => {

            it("Should return the employee name", () => {
                expect(employee.name).toBe(name);

            })
        });


        describe("getID",() => {

            it("Should return the employee ID number", () => {
                expect(employee.id).toBe(id);

            })
        });

        describe("getEmail",() => {

            it("Should return the employee email address", () => {
                expect(employee.email).toBe(email);

            })
        });



        describe("getRole",() => {

            it("Should return 'Employee'", () =>{
                expect(employee.getRole()).toBe("Employee");

            })
        });

    });


