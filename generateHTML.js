const generateHTML = (teamArr) =>{
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
        <title>Team Generator</title>
    </head>
    <body>
        <header class ="bg-secondary ">
            <nav class = "navbar">
                <div class = "fx-bold text-uppercase text-center text-light h1" >
                    Team Profile
                </div>
            </nav>
        </header>
        
        <div class = "container mt-5">
            <div class = "row align-items-start">
                <div class = "team-info">
                ${teamArr.map(person => {
                    if(person.getRole() === "Intern") {
                       return `<div>
                                  <h1>Intern</h1>
                                  <h2>${person.name}</h2>
                                  <p>${person.id}</p>
                                  <p>${person.school}</p>
                                  <p>${person.email}</p>
                                  
                              </div>`
                        } else if (person.getRole() === "Engineer") {
                            `<div>
                                  <h1>Engineer</h1>
                                  <h2>${person.name}</h2>
                                  <p>${person.id}</p>
                                  <p>${person.email}</p>
                                  <p>${person.github}</p>
                            </div>`
                        } else if (person.getRole() === "Manager") {
                            `<div>
                                  <h1>Manager</h1>
                                  <h2>${person.name}</h2>
                                  <p>${person.id}</p>
                                  <p>${person.email}</p>
                                  <p>${person.officeNumber}</p>
                            </div>`
                }})}
    
                </div>
            </div>
        </div>
    </body>
    </html> `
}
module.exports=generateHTML