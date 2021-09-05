const Engineer = require ("../lib/Engineer")

describe("Engineer class", () => {
    it("Should create an engineer class with engineer's name, email, id, and GitHub", () => {
      const engineer = new Engineer("James",007,"james.bond@test.com", "github.com/bondjamesbond" );

      expect(engineer.name).toEqual("James");
      expect(engineer.id).toEqual("007");
      expect(engineer.email).toEqual("james.bond@test.com");
      expect(engineer.github).toEqual("github.com/bondjamesbond");
    });
});
    
    describe("getGitHub", () => {
        it("should return the engineer's GitHub",()=> {
          const engineer = new Engineer("James",007,"james.bond@test.com", "github.com/bondjamesbond" );
          expect(engineer.github).toEqual("github.com/bondjamesbond");
        })
    });

    describe("getRole", () => {
      it("should return engineer's role",()=> {
        const engineer = new Engineer("James",007,"james.bond@test.com", "github.com/bondjamesbond" );
        expect(engineer.getRole()).toEqual("Engineer");
      })
    });