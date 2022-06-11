function generateTeam(teamMembers) {
    function generateManager(manager) {
        return `
        <div class="manager-card">${manager.getName()}<div>
        `
    }
    function generateEngineer(engineer) {
        return `
        <div class="engineer-card">${engineer.getName()}<div>
        `
    }
    function generateIntern(intern) {
        return `
        <div class="intern-card">${intern.getName()}<div>
        `
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
// let html = '';

//     if (teamMembers === Manager) {
//         html = html + generateManager(teamMembers);

//     } else if (teamMembers === Engineer) {
//         html = html + generateEngineer(teamMembers);
//     } else {
//         html = html + generateIntern(teamMembers);
//     }


generateTeam();

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
        Team Member Profiles
    </header>
    <section class = "teamCard"> ${html} 
    </section>  
    </body>`
};

