const Manager = require ("../lib/Manager")

describe("Manager class", () => {
    it("Should create a manager class with manager name, id, email. office-number", () => {
      const manager = new Manager("Michael",5,"michael.scott@test.com",1 );

      expect(manager.name).toEqual("Michael");
      expect(manager.id).toEqual(5);
      expect(manager.email).toEqual("michael.scott@test.com");
      expect(manager.officeNumber).toEqual(1);
      
    });
  
    describe("getofficeNumber", () => {
      it("should return manager's office Number",()=> {
        const manager = new Manager("Michael",5,"michael.scott@test.com", 1);
        expect(manager.officeNumber).toEqual(1);
      })
    });
  
    describe("getRole", () => {
        it("should return the manager's role",()=> {
          const manager = new Manager("Michael",5,"michael.scott@test.com", 1);
          expect(manager.getRole()).toEqual("Manager");
        })
    });
  });