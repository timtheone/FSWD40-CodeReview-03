window.onload = function() {
let team = JSON.parse(teamMembers);

function displayTeam() {

    for (let i = 0; i < 3; i++) {
            
        fig = document.getElementsByTagName('figure')[i];
        figcap = document.getElementsByTagName('figcaption')[i];
        text = document.createTextNode(team[i].name);
        email = document.createTextNode(team[i].email)

        img = document.createElement('img');
        imgAtt = document.createAttribute('src');
        imgAtt.value = team[i].image;
        img.setAttributeNode(imgAtt);

        breaktag = document.createElement("br");
        fig.appendChild(img);
        fig.appendChild(figcap);
        figcap.appendChild(text);
        figcap.appendChild(breaktag);
        figcap.appendChild(email);
    }   
}

displayTeam();
}