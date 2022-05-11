// employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    //name from input
    getName(){
        return this.name;
    }
    //Id from input
    getId(){
        return this.id;
    }
    //email from input
    getEmail(){
        return this.email;
    }
    //role from input
    getRole(){
        return 'Employee';
    }
} 

//child of employee, manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNum = officeNum; 
    }

    getRole(){
        return 'Manager';
    }
    getofficeNum(){
        return this.officeNum;
    }
}

class Intern extends Employee {
    constructor (name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school
    }
}

class Engineer extends Employee {
    constructor (name,id,email,github){
        super(name, id, email);
        this.github=github;
    }

    getRole(){
        return 'Engineer';
    }
    getGitHub(){
        return this.github;
    }
}

module.exports = {Employee, Manager, Intern, Engineer};
