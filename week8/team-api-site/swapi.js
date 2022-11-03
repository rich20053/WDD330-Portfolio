
const peopleButton = document.getElementById('people');
const shipsButton = document.getElementById('ships');
const outputUL = document.getElementById('output');
const prevButton = document.getElementById('prevSet');
const nextButton = document.getElementById('nextSet');
var currentSet = "";
var nextURL = "";
var prevURL = "";

const peopleURL = 'https://swapi.dev/api/people/';
const shipsURL = 'https://swapi.dev/api/starships/';

peopleButton.addEventListener('click', () => {
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
        var itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i]);
        }
    })
    .catch( error => console.log('There was an error:', error))
},false);

shipsButton.addEventListener('click', () => {
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
        var itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i]);
        }
    })
    .catch( error => console.log('There was an error:', error))
},false);

function displayItem(itemData) {
    const item = document.createElement("li");
    item.innerHTML = itemData.name;
    item.setAttribute("class", "item");

    item.addEventListener('touchend', () => {
        renderThisDetail(itemData);
      });
    item.addEventListener('click', () => {
        renderThisDetail(itemData);
      });

    outputUL.appendChild(item);
}

prevButton.addEventListener('click', () => {
    if (prevURL!=null) {
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

function renderThisDetail(passedItemData) {
    if (currentSet == "people") {
        var outputUL = document.querySelector("ul");
        var child = outputUL.lastElementChild;
        // Remove all current tasks from HTML
        while (child) {
            outputUL.removeChild(child);
            child = outputUL.lastElementChild;
        }
        outputUL.textContent = `${passedItemData.name}`;
        outputUL.setAttribute("class", "ulhead");
        var item = document.createElement("li");
        item.innerHTML = `Born: ${passedItemData.birth_year}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Gender: ${passedItemData.gender}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Hair Color: ${passedItemData.hair_color}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Eye Color: ${passedItemData.eye_color}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Height: ${passedItemData.height}`;
        outputUL.appendChild(item);
    }
    else if (currentSet == "ships") {
        var outputUL = document.querySelector("ul");
        var child = outputUL.lastElementChild;
        // Remove all current tasks from HTML
        while (child) {
            outputUL.removeChild(child);
            child = outputUL.lastElementChild;
        }
        outputUL.textContent = `${passedItemData.name}`;
        outputUL.setAttribute("class", "ulhead");
        var item = document.createElement("li");
        item.innerHTML = `Model: ${passedItemData.model}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Hyperdrive: ${passedItemData.hyperdrive_rating}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Crew: ${passedItemData.crew}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Length: ${passedItemData.length}`;
        outputUL.appendChild(item);
        item = document.createElement("li");
        item.innerHTML = `Cargo: ${passedItemData.cargo_capacity}`;
        outputUL.appendChild(item);

    }
    else {
        //not found
    }
}










