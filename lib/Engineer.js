const Employee = require("/Employee")

class Engineer extends Employee {
    consturcture (name, id, email, github) {
        super(name, is, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    };
    getRole() {
        return "engineer"
    };
}

module.exports = Engineer