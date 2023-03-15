function getRandomTeams() {
    let str = document.getElementById("textarea").value.trim();
    let teamNumber = Number(document.getElementById("teamQuantity").value);
    let players = str.split("\n");
    let teamarr = [[]];
    for(let i=0;i<teamNumber;i++) {
        teamarr[i] = [];
    }
    let randNum = Math.floor(Math.random() * players.length);
    let playerLength = players.length;
    let team = 0;
    for(let i = 0;i<playerLength;i++) {
        let removedPlayer = players.splice(randNum,1);
        teamarr[team].push(removedPlayer);
        team++;
        if (team >= teamNumber) {
            team = 0;
        }
        randNum = Math.floor(Math.random() * players.length);
    }
    let teamstext = "";
    let teamNum = 1;
    for(let i = 0;i<teamNumber;i++) {
        teamstext = teamstext + "Team " + teamNum + ": <br>";
        let playerNum = 1;
        for(let j = 0;j<teamarr[i].length;j++) {
            teamstext = teamstext + playerNum + ". " + teamarr[i][j] + "<br>";
            playerNum++;
        }
        if (i != teamNumber) {
            teamstext = teamstext + "<br>";
        }
        teamNum++;
    }
    document.getElementById("teams").innerHTML = teamstext;
}