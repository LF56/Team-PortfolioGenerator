const engineerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-code-fill" viewBox="0 0 25 25">
<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z"/>
</svg>`;
const managerIcon =`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 25 25">
<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
<path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>`;
const internIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 25 25">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>`

function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>TeamGen</title>
</head>
<body>
<header>
    <h2 class="text-center">
        ${teamMembers[0].getTeamName()}
    </h2>
</header>
<main class="container">
  <section class="row">
${teamCards(teamMembers)}   
    </section>
</main>
</body>
</html>
    `
}

function teamCards(teamMembers) {
    let cardString = '';
    for (let i = 0; i < teamMembers.length; i++) {
        cardString += `
    <div class="card col-4 m-2 p-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${teamMembers[i].name ? teamMembers[i].name : teamMembers[i].employeeName}</h5>
          <p class="card-text">${teamMembers[i].officeNumber ? `${managerIcon}${teamMembers[i].getRole()}` : (teamMembers[i].github ? `${engineerIcon}${teamMembers[i].getRole()}` : `${internIcon}${teamMembers[i].getRole()}`)}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${teamMembers[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
          <li class="list-group-item">${teamMembers[i].officeNumber ? `Office Number:${teamMembers[i].officeNumber}` : (teamMembers[i].github ? `GitHub: <a href="https://github.com/${teamMembers[i].github}">${teamMembers[i].github}</a>` : `School:${teamMembers[i].school}`)}</li>
        </ul>
      </div>
    `
    }
    return cardString
}

module.exports = generateHTML