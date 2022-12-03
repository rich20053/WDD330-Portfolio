
//const peopleButton = document.getElementById('people');
//const shipsButton = document.getElementById('ships');
//const filmsButton = document.getElementById('films');
const availPlayers = document.getElementById('availplayers');
//const prevButton = document.getElementById('prevSet');
//const nextButton = document.getElementById('nextSet');
var availPlayerArray = [];
var teamArray = [];
var myPlayerArray = [];
//var currentSet = "";
//var nextURL = "";
//var prevURL = "";

//const plantURL = 'https://plant.id/api/v2?key=BbjtmuVQEPsDPWd5wi9BxkjiJK0OyfNWlJY6YOEp1FIEHsIKMV';
//const plantURL = 'https://plant.id/api/v2?key=BbjtmuVQEPsDPWd5wi9BxkjiJK0OyfNWlJY6YOEp1FIEHsIKMV';
//const plantURL = 'https://www.usda.gov/sites/default/files/documents/data.json';
//const plantURL = 'https://api.ers.usda.gov/data/arms/state?api_key=ObNjkgqBNwfkl6NSrL284SiZGxZzh2EfbgaMxP7o';
//const plantURL = 'https://trefle.io/doc/swagger.json';
//const shipsURL = 'https://swapi.dev/api/starships/';
//const filmsURL = 'curl --location -g --request GET '{{hikerapi}}/trails';
//const plantURL = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
//const plantURL = 'https://api-nba-v1.p.rapidapi.com/players?api_key=9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc';
//const playerURL = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2020';
//const playerURL = 'https://api-basketball.p.rapidapi.com/statistics?season=2019-2020&league=12&team=133';
//const playerURL = 'https://api-basketball.p.rapidapi.com/statistics?season=2019-2020&league=12';
//const playerURL = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2020';
//const teamURL = 'https://free-nba.p.rapidapi.com/teams?page=0';
const teamURL = 'https://free-nba.p.rapidapi.com/teams';
const playerURL = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
//const playerURL = 'https://free-nba.p.rapidapi.com/players';
//const playerURL = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';
const playStatURL = 'https://api-nba-v1.p.rapidapi.com/players/statistics?season=2020';

const options = {
    /*
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}*/
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};
/*
fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2020', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

*/
function displayPlayer(itemData, outputUL) {
 
    const item = document.createElement("li");
    item.innerHTML = `${itemData.last_name}, ${itemData.first_name} - ${itemData.team.full_name}`;
    
    item.setAttribute("class", "item");
/*    const description = document.createElement('ul');
    description.style.display = 'none';
    item.onclick = () => {
        description.style.display = description.style.display === 'none'? 'block' : 'none';
    }*/
    outputUL.appendChild(item);
/*    if (currentSet == "people") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Born: ${itemData.birth_year}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Gender: ${itemData.gender}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Hair Color: ${itemData.hair_color}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Eye Color: ${itemData.eye_color}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Height: ${itemData.height}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 0px;
    }
    else if (currentSet == "ships") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Model: ${itemData.model}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Hyperdrive: ${itemData.hyperdrive_rating}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Crew: ${itemData.crew}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Length: ${itemData.length}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Cargo: ${itemData.cargo_capacity}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 0px;
    }
    else if (currentSet == "films") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Title: ${itemData.title}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Episode: ${itemData.episode_id}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Release Date: ${itemData.release_date}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Director: ${itemData.director}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Producer: ${itemData.producer}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Opening: ${itemData.opening_crawl}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 200px;
    }
    outputUL.appendChild(description);*/
}

function displayTeam(itemData, outputUL) {
 
    const item = document.createElement("li");
    item.innerHTML = `${itemData}`;
    
    item.setAttribute("class", "item");
    outputUL.appendChild(item);
}

function viewAvailPlayers() {
    debugger;
    var outputUL = document.querySelector("#availplayers");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };
    
    fetch(playerURL, options)
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
        let itemArray = data.data;
        outputUL.innerHTML = '';
        debugger;
        for (var i=0; i<itemArray.length; i++) {
            displayPlayer(itemArray[i], outputUL);
        }
    })
    .catch( error => console.log('There was an error:', error)) 
};

/*function getTeams() {
    debugger;
    var outputUL = document.querySelector("#availplayers");
    var child = outputUL.lastElementChild;
    outputUL.textContent = "";
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }
    // Pull the current list from the localStorage
    var myJSON = JSON.parse(window.localStorage.getItem('myteamlist'));
    // If a list exists in localStorage, create tasks and add them to this list
    if (myJSON != "" && myJSON != null) {
        for (var i=0; i<myJSON.length; i++) {
            //var storedItem = new Task(myJSON[i].tName,myJSON[i].id, jsComplete);
        teamArray.push({teamnbr:i, teamname:myJSON[i]});
            //displayTeam(myJSON[i], outputUL);
        }
    }
    else {
//        const options = {
  //          method: 'GET',
    //        headers: {
      //          'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
        //        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          //  }
       // };
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9071c7b1b6msh503f90f805c9129p13370ejsn6d0b3c52f3bc',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };
        
        fetch(teamURL, options)
            .then(response => response.json())   
            .then(response => {
                console.log(response);
                let itemArray = response.response;
                debugger;
                for (var i=0; i<itemArray.length; i++) {
                    //displayItem(itemArray[i], outputUL);
                    if (itemArray[i].nbaFranchise) {
                        teamArray.push({teamnbr:i, teamname:itemArray[i].name});
                        //displayTeam(itemArray[i].name, outputUL);
                        console.log(teamArray);
                    }
                    if ((i+1)==itemArray.length) {
                        // Save current list to localStorage
                        var myJSON = JSON.stringify(teamArray);   
                        window.localStorage.setItem('myteamlist', myJSON);
                    
                        //for (var i=0; i<teamArray.length; i++) {
                        //    displayTeam(teamArray[i], outputUL);
                        //}
                    }
                }
                console.log(teamArray);
            })
            .catch( error => console.log('There was an error:', error)) 
    
            
    }

}

//debugger;
//getTeams();
debugger;
viewAvailPlayers();

/*
shipsButton.addEventListener('click', () => {
    var outputUL = document.querySelector("#output");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }
    currentSet = "ships";
    fetch(shipsURL)
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
        nextURL = data.next;
        prevURL = data.previous;
        itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i], outputUL);
        }
    })
    .catch( error => console.log('There was an error:', error))
},false);

filmsButton.addEventListener('click', () => {
    var outputUL = document.querySelector("#output");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }
    currentSet = "films";
    fetch(filmsURL)
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
        nextURL = data.next;
        prevURL = data.previous;
        itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i], outputUL);
        }
    })
    .catch( error => console.log('There was an error:', error))
},false);

function displayItem(itemData) {
    var outputUL = document.querySelector("#output");
    const item = document.createElement("h3");
    if (currentSet=="films") {
        item.innerHTML = itemData.title;
    }
    else {
        item.innerHTML = itemData.name;
    }
    item.setAttribute("class", "item");
    const description = document.createElement('ul');
    description.style.display = 'none';
    item.onclick = () => {
        description.style.display = description.style.display === 'none'? 'block' : 'none';
    }
    outputUL.appendChild(item);
    if (currentSet == "people") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Born: ${itemData.birth_year}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Gender: ${itemData.gender}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Hair Color: ${itemData.hair_color}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Eye Color: ${itemData.eye_color}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Height: ${itemData.height}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 0px;
    }
    else if (currentSet == "ships") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Model: ${itemData.model}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Hyperdrive: ${itemData.hyperdrive_rating}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Crew: ${itemData.crew}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Length: ${itemData.length}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Cargo: ${itemData.cargo_capacity}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 0px;
    }
    else if (currentSet == "films") {
        var subitem = document.createElement("li");
        subitem.innerHTML = `Title: ${itemData.title}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Episode: ${itemData.episode_id}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Release Date: ${itemData.release_date}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Director: ${itemData.director}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Producer: ${itemData.producer}`;
        description.appendChild(subitem);
        subitem = document.createElement("li");
        subitem.innerHTML = `Opening: ${itemData.opening_crawl}`;
        description.appendChild(subitem);
        //var flightPath = document.querySelector("#starbox");
        //flightPath.style.height = 200px;
    }
    outputUL.appendChild(description);
}

prevButton.addEventListener('click', () => {
    if (prevURL!=null) {
        var outputUL = document.querySelector("#output");
        var child = outputUL.lastElementChild;
        // Remove all current tasks from HTML
        while (child) {
            outputUL.removeChild(child);
            child = outputUL.lastElementChild;
        }
        fetch(prevURL)
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
            nextURL = data.next;
            prevURL = data.previous;
            var thisArray = data.results;
            outputUL.innerHTML = '';
            for (var i=0; i<thisArray.length; i++) {
                displayItem(thisArray[i]);
            }
        })
        .catch( error => console.log('There was an error:', error))
    }
},false);

nextButton.addEventListener('click', () => {
    if (nextURL!=null) {
        var outputUL = document.querySelector("#output");
        var child = outputUL.lastElementChild;
        // Remove all current tasks from HTML
        while (child) {
            outputUL.removeChild(child);
            child = outputUL.lastElementChild;
        }
        fetch(nextURL)
        .then( response => {
            outputUL.innerHTML = 'Waiting for response...';
            if(response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then( response => response.json() )
        .then( data => {
            nextURL = data.next;
            prevURL = data.previous;
            var thisArray = data.results;
            outputUL.innerHTML = '';
            for (var i=0; i<thisArray.length; i++) {
                displayItem(thisArray[i]);
            }
        })
        .catch( error => console.log('There was an error:', error))
    }
},false);

*/
