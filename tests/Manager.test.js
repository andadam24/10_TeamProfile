const Manager = require ("../lib/Manager")

describe("Manager class", () => {
    it("Should create a manager class with manager name, id, email. office-number", () => {
      const manager = new Manager("Michael",05,"michael.scott@test.com",001 );

      expect(manager.name).toEqual("Michael");
      expect(manager.id).toEqual(05);
      expect(manager.email).toEqual("michael.scott@test.com");
      expect(manager.officeNumber).toEqual(001);
      
    });
  
    describe("getofficeNumber", () => {
      it("should return manager's office Number",()=> {
        const manager = new Manager("Michael",05,"michael.scott@test.com", 001);
        expect(manager.officeNumber).toEqual(001);
      })
    });
  
    describe("getRole", () => {
        it("should return the manager's role",()=> {
          const manager = new Manager("Michael",05,"michael.scott@test.com", 001);
          expect(manager.getRole()).toEqual("Manager");
        })
    });
  });