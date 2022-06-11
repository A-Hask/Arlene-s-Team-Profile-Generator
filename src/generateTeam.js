function generateTeam(teamMembers) {
    function generateManager(manager) {
        return
        //html code for div
        `<div class="managerCard">${manager.getName()}<div>
        `
    }
    function generateEngineer(engineer) {

    }
    function generateIntern(intern) {

    }
    const html = [];
    html.push(teamMembers.filter(employee => employee.getRole() === 'Manager'))
        .map(manager => generateManager(manager));
    html.push(teamMembers.filter(employee => employee.getRole() === 'Engineer'))
        .map(engineer => generateEngineer(engineer))
        .join('');
    html.push(teamMembers.filter(employee => employee.getRole() === 'Intern'))
        .map(intern => generateIntern(intern))
        .join('');
    return html.join('');
}

module.exports = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en-us">
    
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="./dist/style.css">
        <title>My Team Generator</title>
    </head>
    <body>
    
    <header>

    </header>
    <div class = "teamCard"> ${generateTeam(teamMembers)} </div>
  
    </body>`
};


