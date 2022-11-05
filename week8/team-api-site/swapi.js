
const peopleButton = document.getElementById('people');
const shipsButton = document.getElementById('ships');
const filmsButton = document.getElementById('films');
const outputUL = document.getElementById('output');
const prevButton = document.getElementById('prevSet');
const nextButton = document.getElementById('nextSet');
var itemArray = [];
var currentSet = "";
var nextURL = "";
var prevURL = "";

const peopleURL = 'https://swapi.dev/api/people/';
const shipsURL = 'https://swapi.dev/api/starships/';
const filmsURL = 'https://swapi.dev/api/films/';

peopleButton.addEventListener('click', () => {
    var outputUL = document.querySelector("#output");
    var child = outputUL.lastElementChild;
    // Remove all current tasks from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }
    currentSet = "people";
    fetch(peopleURL)
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


