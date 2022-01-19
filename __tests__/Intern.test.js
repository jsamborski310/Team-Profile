const Intern = require("../lib/Intern");

describe("Intern", () => {

    const name = "Michelle Morales";
    const id = 12;
    const email = "michelle.morales@gmail.com";
    const initial = "MM";
    const icon = `<i class="far fa-keyboard"></i>`
    const school = "University of Washington"
   
    const intern = new Intern(name, id, email, school);


        describe("getName",() => {

            it("Should return the intern name", () => {
                expect(intern.name).toBe(name);

            })
        });


        describe("getID",() => {

            it("Should return the intern ID number", () => {
                expect(intern.id).toBe(id);

            })
        });

        describe("getEmail",() => {

            it("Should return the intern email address", () => {
                expect(intern.email).toBe(email);

            })
        });

        describe("getIcon",() => {

            it("Should return the icon used to visually identify the Intern role", () => {
                expect(intern.getIcon()).toBe(icon);

            })
        });

        describe("getSchool",() => {

            it("Should return the name of the school the Intern attends", () => {
                expect(intern.getSchool()).toBe(school);

            })
        });

        describe("getInitial",() => {

            it("Should return the first letter of the Intern's first name and last name", () =>{
                expect(intern.getInitial()).toBe(initial);

            })
        });


        describe("getRole",() => {

            it("Should return 'Intern'", () =>{
                expect(intern.getRole()).toBe("Intern");

            })
        });

    
});