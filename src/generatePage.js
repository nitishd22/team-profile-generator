const {Manager, Intern, Engineer} = require("../lib/class");

function generateManagerCard(){
    return `
        <div class ="col-4 mt">
            <div class = "card m-1">
                <h3 class = "card-title">${Manager.name}</h3>
                <h4>Manager</h4>
            </div>
            
            <div class = "card-text">
                <p class = "id">ID: ${Manager.id}</p>
                <p class = "email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class = "office">Office Number: ${Manager.officeNum}</p>
            </div>
        </div>        
    `;
}

function generateInternCard(){
    return `
        <div class ="col-4 mt">
            <div class = "card m-1">
                <h3 class = "card-title">${Intern.name}</h3>
                <h4>Intern</h4>
            </div>
            
            <div class = "card-text">
                <p class = "id">ID: ${Intern.id}</p>
                <p class = "email">Email: <a href="mailto:${Intern.email}">${Manager.email}</a></p>
                <p class = "office">School: ${Intern.school}</p>
            </div>
        </div>        
    `;
}

function generateEngineerCard(){
    return `
        <div class ="col-4 mt">
            <div class = "card m-1">
                <h3 class = "card-title">${Engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            
            <div class = "card-text">
                <p class = "id">ID: ${Engineer.id}</p>
                <p class = "email">Email: <a href="mailto:${Engineer.email}">${Manager.email}</a></p>
                <p class = "Github">School: ${Engineer.github}</p>
            </div>
        </div>        
    `;
}

function generateCards(){
    cards = [];

    for(let i = 0;i< data.length;i++){
        const employees = data[i];
        const roles = employees.getRole();

        if(role==='Manager'){
            const mCard=generateManagerCard(employees);
            cards.push(mCard);
        }

        if(role==='Intern'){
            const iCard=generateInternCard(employees);
            cards.push(iCard);
        }

        if(role==='Engineer'){
            const eCard=generateEngineerCard(employees);
            cards.push(eCard);
        }
    }

    const empCards=pageArray.join('');
    const genTeam = generatePage(empCards);
    return genTeam;
}

const generatePage = function(empCards){
    return`
    <!DOCTYPE html>
    <html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
        <body>
            <header>
                <div class = jumbotron jumbotron-fluid>
                    <div class ="container">
                        <h1 class = <"display-4">Team Profile</h1>
                    </div>
                </div>
                <div class = "d-flex flex-row flex-wrap justify-content center>
                ${generateCards(team)}
                </div>
            </header>
        </body>
        </html>
    `
}

module.exports = generatePage;



















