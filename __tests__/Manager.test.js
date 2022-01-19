const Manager = require("../lib/Manager");

describe("Manager", () => {

    const name = "Sandy Smith";
    const id = 30;
    const email = "sandy.smith@gmail.com";
    const icon = `<i class="far fa-grin-beam"></i>`;
    const officeNumber = "800-555-5555";
    const initial = "SS";
   
    const manager = new Manager(name, id, email, officeNumber);


        describe("getName",() => {

            it("Should return the manager name", () => {
                expect(manager.name).toBe(name);

            })
        });


        describe("getID",() => {

            it("Should return the manager ID number", () => {
                expect(manager.id).toBe(id);

            })
        });

        describe("getEmail",() => {

            it("Should return the manager email address", () => {
                expect(manager.email).toBe(email);

            })
        });

        describe("getOfficeNumber",() => {

            it("Should return the manager's office phone number", () => {
                expect(manager.officeNumber).toBe(officeNumber);

            })
        });


        describe("getIcon",() => {

            it("Should return the icon used to visually identify the Manager role", () => {
                expect(manager.getIcon()).toBe(icon);

            })
        });

        describe("getInitial",() => {

            it("Should return the first letter of the Manager's first name and last name", () =>{
                expect(manager.getInitial()).toBe(initial);

            })
        });

        describe("getRole",() => {

            it("Should return 'Manager'", () =>{
                expect(manager.getRole()).toBe("Manager");

            })
        });

    
});