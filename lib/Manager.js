const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email, officeNumber, teamName){
        super(name,id,email)
        this.officeNumber = officeNumber;
        this.teamName = teamName;
    }
    getofficeNumber() {
        return this.officeNumber
    }
    getTeamName() {
        return this.teamName
    }
    
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;