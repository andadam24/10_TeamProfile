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
                       return `<div class = "card col-3">
                                <div class="card-header"
                                  <h2 class="role text-center">Intern</h2>
                                  <h3 class="name text-center">${person.name}</h2>
                                </div>
                                <div class ="card-body">
                                    <ul class="list-group">

                                        <li class="list-group-item">${person.id}</li>
                                        <li class="list-group-item">${person.school}</li>
                                        <li class="list-group-item">${person.email}</li>
                                    </ul>
                                </div>
                                  
                              </div>`
                        } else if (person.getRole() === "Engineer") {
                            return `<div class = "card col-3">
                            <div class="card-header"
                              <h2 class="role text-center">Engineer</h2>
                              <h3 class="name text-center">${person.name}</h2>
                            </div>
                            <div class ="card-body">
                                <ul class="list-group">

                                    <li class="list-group-item">${person.id}</li>
                                    <li class="list-group-item">${person.email}</li>
                                    <li class="list-group-item">${person.github}</li>
                                </ul>
                            </div>
                              
                          </div>`

                        } else if (person.getRole() === "Manager") {
                            return `<div class = "card col-3">
                            <div class="card-header"
                              <h2 class="role text-center">Manager</h2>
                              <h3 class="name text-center">${person.name}</h2>
                            </div>
                            <div class ="card-body">
                                <ul class="list-group">

                                    <li class="list-group-item">${person.id}</li>
                                    <li class="list-group-item">${person.email}</li>
                                    <li class="list-group-item">${person.officeNumer}</li>
                                </ul>
                            </div>
                              
                          </div>`
                }})}
    
                </div>
            </div>
        </div>
    </body>
    </html> `
}
module.exports=generateHTML