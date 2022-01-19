const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    const name = "Juanita Samborski";
    const id = 35;
    const email = "juanita@breakthroughwebsite.com";
    const initial = "JS";
    const icon = `<i class="fas fa-laptop-code"></i>`;
    const github = "jsamborski310";
    const githubURL = `<i style="padding-right:10px; font-size:20px; width:30px;" class="fab fa-github"></i><a href="https://github.com/${github}" target="_blank">${github}</a>`;
   
    const engineer = new Engineer(name, id, email, github);


        describe("getName",() => {

            it("Should return the engineer name", () => {
                expect(engineer.name).toBe(name);

            })
        });


        describe("getID",() => {

            it("Should return the employee ID number", () => {
                expect(engineer.id).toBe(id);

            })
        });

        describe("getEmail",() => {

            it("Should return the employee email address", () => {
                expect(engineer.email).toBe(email);

            })
        });

        describe("getIcon",() => {

            it("Should return the icon used to visually identify the Engineer role", () => {
                expect(engineer.getIcon()).toBe(icon);

            })
        });

        describe("getGithub",() => {

            it("Should return the Engineer's GitHub URL", () => {
                expect(engineer.getGithub()).toBe(githubURL);

            })
        });


        describe("getInitial",() => {

            it("Should return the first letter of the Engineer's first name and last name", () =>{
                expect(engineer.getInitial()).toBe(initial);

            })
        });


        describe("getRole",() => {

            it("Should return 'Engineer'", () =>{
                expect(engineer.getRole()).toBe("Engineer");

            })
        });

    
});