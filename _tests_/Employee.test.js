const Employee = require ("../lib/Employee")

describe("Employee class", () => {
    it("Should create an employee class with employee name, email, id", () => {
      const employee = new Employee("Bart",100,"bart.simpson@test.com" );

      expect(employee.name).toEqual("Bart");
      expect(employee.id).toEqual(100);
      expect(employee.email).toEqual("bart.simpson@test.com");
      
    });
  
    describe("getName", () => {
      it("should return employee's name",()=> {
        const employee = new Employee("Bart",100,"bart.simpson@test.com" );
        expect(employee.name).toEqual("Bart");
      })
    });
  
    describe("getEmail", () => {
        it("should return the employee's email",()=> {
          const employee = new Employee("Bart",100,"bart.simpson@test.com" );
          expect(employee.email).toEqual("bart.simpson@test.com");
        })
    });
    
    describe("getID", () => {
        it("should return the employee's ID",()=> {
          const employee = new Employee("Bart",100,"bart.simpson@test.com" );
          expect(employee.id).toEqual(100);
        })
    });

    describe("getRole", () => {
        it("should return the employee's role",()=> {
          const employee = new Employee("Bart",100,"bart.simpson@test.com" );
          expect(employee.getRole()).toEqual("Employee");
        })
    });
  });