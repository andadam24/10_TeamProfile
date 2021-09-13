const Intern = require ("../lib/Intern")

describe("Intern class", () => {
    it("Should create an Intern class with Intern's college and college", () => {
      const intern = new Intern("Monica",42,"monica.lewinsky@test.com", "Santa Monica College" );

      expect(intern.name).toEqual("Monica");
      expect(intern.id).toEqual(42);
      expect(intern.email).toEqual("monica.lewinsky@test.com");
      expect(intern.school).toEqual("Santa Monica College");
    });
});
    
    describe("getSchool", () => {
        it("should return the Intern's school",()=> {
          const intern = new Intern("Monica", 42,"monica.lewinsky@test.com", "Santa Monica College" );
          expect(intern.getSchool()).toEqual("Santa Monica College");
        })
    });

    describe("getRole", () => {
        it("should return the Intern's role",()=> {
          const intern = new Intern("Monica", 42,"monica.lewinsky@test.com", "Santa Monica College" );
          expect(intern.getRole()).toEqual("Intern");
        })
    });