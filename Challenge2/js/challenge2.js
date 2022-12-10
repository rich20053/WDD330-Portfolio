
const availPlayers = document.getElementById('availplayers');
//const prevButton = document.getElementById('prevSet');
//const nextButton = document.getElementById('nextSet');
var availPlayerArray = [];
var myPlayerArray = [];
//var nextURL = "";
//var prevURL = "";

const playStatURL = 'https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2022/';
                 //https://api.sportsdata.io/v3/nba/scores/json/Players
const playerURL = 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=57d85064908b4d1e83fb7c0987aefff3';
//const playerURL = 'https://api.sportsdata.io/v3/nba/scores/json/Players';

/*
const options = {
    method: 'GET',
    headers: {
        'Ocp-Apim-Subscription-Key' : '57d85064908b4d1e83fb7c0987aefff3'
    }
};*/

function removePrevAvailSelected() {
    var outputUL = document.querySelector("#availplayers");
    const nodeList = outputUL.childNodes;
    //debugger;
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove('selected');
    }
}

function displayPlayer(itemData, outputUL) {
 
    const item = document.createElement("li");
    item.innerHTML = `${itemData.LastName}, ${itemData.FirstName} - ${itemData.Team} - ${itemData.Position}`; // - ${itemData.PlayerID}`;
    
    item.setAttribute("class", "item");
    // Listener attached to the item to pull stats
    item.addEventListener('click', () => {
        //debugger;
        let btn = document.getElementsByClassName("hidden");
        console.log(btn);
        let btnLen = btn.length;
        for (let i=0; i<btnLen; i++) {
            btn[0].classList.remove('hidden');
        }
        removePrevAvailSelected();
        item.classList.add('selected');
        displayPlayerStats(itemData.PlayerID, itemData.FirstName, itemData.LastName);
    })
    outputUL.appendChild(item);
}

function displayStats(outputUL, stats, fName, lName) {
 
    console.log(stats);
    //item = document.createElement("p");
    //item.innerHTML = `ID: ${stats.PlayerID}`;
    //outputUL.appendChild(item);
    let item = document.createElement("p");
    item.innerHTML = `${fName} ${lName}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Games: ${stats.Games}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Points: ${stats.Points}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Points/Game: ${(stats.Points/stats.Games).toFixed(2)}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Rebounds: ${stats.Rebounds}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Rebounds/Game: ${(stats.Rebounds/stats.Games).toFixed(2)}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Assists: ${stats.Assists}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Assists/Game: ${(stats.Assists/stats.Games).toFixed(2)}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Steals: ${stats.Steals}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Steals/Game: ${(stats.Steals/stats.Games).toFixed(2)}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Blocks: ${stats.BlockedShots}`;
    outputUL.appendChild(item);
    item = document.createElement("p");
    item.innerHTML = `Blocks/Game: ${(stats.BlockedShots/stats.Games).toFixed(2)}`;
    outputUL.appendChild(item);
}

function viewAvailPlayers() {
    //debugger;
    var outputUL = document.querySelector("#availplayers");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }

    fetch(playerURL) 
    .then( response => {
        outputUL.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
            throw Error(response.statusText);
        }
    )
    .then( response => response.json() )
    .then( data => {
        console.log(data);
        let itemArray = data;
        outputUL.innerHTML = '';
        //debugger;
        for (var i=0; i<itemArray.length; i++) {
            displayPlayer(itemArray[i], outputUL);
        }
    })
    .catch( error => console.log('There was an error:', error)) 
};

function displayPlayerStats(playerID, fName, lName) {
    //debugger;
    var outputUL = document.querySelector("#playerdesc");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }
    let statURL = playStatURL+playerID+`?key=57d85064908b4d1e83fb7c0987aefff3`;
    fetch(statURL) 
    .then( response => {
        outputUL.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
            throw Error(response.statusText);
        }
    )
    .then( response => response.json() )
    .then( data => {
        console.log(data);
        let itemArray = data;
        console.log(itemArray);
        outputUL.innerHTML = '';
        //debugger;
        displayStats(outputUL, itemArray, fName, lName);
    })
    .catch( error => console.log('There was an error:', error)) 
};

viewAvailPlayers();