//page generator
const generate = require ('./src/generatePage.js');
var inquirer = require("inquirer");
const {Employee, Manager, Intern, Engineer}=require("./lib/class");
const fs = require('fs');

const teamArray = [];

const roleQuestion = [
    {
        type:"list",
        name: "confirmation",
        message:"Select the role of the team member that you are adding: ",
        choices:["None","Engineer","Intern"],
        default: "None",
    },
];

const ManagerQuestion = [
    {
        type:"input",
        name:"EmployeeName",
        message:"Enter the manager's name: ",
        validate: (name)=>{
            if (name){
                return true;
            }else{
                return "Enter the manager's name: ";
            }
    
        },
    },
    {
        type: "number",
        name: "EmployeeID",
        message: "Enter the team manager's ID: ",
        default: 1,
    },
    {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter the team manager's email: ",
        validate: (email)=>{
            if(email){
                return true
            }else{
                return "Enter an email address: ";
            }
        },
    },
    {
        type: "input",
        type: "officeNum",
        message: "Enter the office number: ",
        default: 1,
    },

];

const EngineerQuestion = [
    {
        type:"input",
        name:"EmployeeName",
        message:"Enter the engineer's name: ",
        validate: (name)=>{
            if (name){
                return true;
            }else{
                return "Enter the engineer's name: ";
            }
    
        },
    },
    {
        type: "number",
        name: "EmployeeID",
        message: "Enter the engineer's ID: ",
        default: 1,
    },
    {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter the engineer's email: ",
        validate: (email)=>{
            if(email.length===0){
                return("Enter an email address: ")
            }else{
                return true;
            }
        },
    },
    {
        type: "input",
        name: "Github",
        message: "Enter the engineer's Github",
    },

];

const InternQuestion = [
    {
        type: "input",
        name: "EmployeeName",
        message: "Enter the Intern's name?",
        validate: (name)=>{
            if (name){
                return true;
            }else{
                return "Enter the intern's name: ";
            }
    
        },
    },
    {
        type: "number",
        name: "EmployeeID",
        message: "Enter the intern's ID: ",
    },
    {
        type: "input",
        name: "EmployeeEmail",
        message: "Enter the intern's email: ",
        validate: (email)=>{
            if(email.length===0){
                return("Enter an email address: ")
            }else{
                return true;
            }
        },
    },
    {
        type: "input",
        name: "school",
        message: "Enter the engineer's school: ",
        validate: (school)=>{
            if(school.length===0){
                return("Enter a school name: ")
            }else{
                return true;
            }
        },
    },
];


function newEmployees(){
    inquirer.prompt(roleQuestion).then((answers)=>{
        if(answers.confirmation === "Engineer"){
            newEngineer();
        }
        else if(answer.confirmation==="Intern"){
            newIntern();
        }
        else{
            writeToFile(".dist/index.html");
        }

    });
}

inquirer.prompt(ManagerQuestion).then((answers)=>{
    const manager = new Manager(answers.EmployeeName,answers.EmployeeID,answers.EmployeeEmail,answers.EmployeeNum);
    teamArray.push(manager);
    newEmployees();    
});

function newEngineer(){
    inquirer.prompt(EngineerQuestion).then((answers)=>{
        const engineer = new Engineer(answers.EmployeeName,answers.EmployeeID,answers.EmployeeEmail,answers.Github);
        teamArray.push(engineer);
        newEmployees();    
    });
}

function newIntern(){
    inquirer.prompt(InternQuestion).then((answers)=>{
        const intern = new Intern(answers.EmployeeName,answers.EmployeeID,answers.EmployeeEmail,answers.school);
        teamArray.push(intern);
        newEmployees();    
    });
}

function writeToFile(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
        if (err){
            console.log(err);
        }else{
            console.log("saved");
        }
    });
}


