/*check_auth(){
    fetch(Urls.check_auth(), {
      credentials: 'include',
      method: 'GET'
    }).then(response => {
      if(response.ok) return response.json();
    }).then(json => {
      return json.user_logged_in;
    });
  } */
function getJSON(url) {
    return fetch(url)
    .then(response => response.json())
    .then(json => {
        return json;
    });
}
/*    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        }); 
        .then( response => response.json() )
        .then( 
            data => {
                return(data);
        })
    }*/ 

/*        nextURL = data.next;
    prevURL = data.previous;
    itemArray = data.results;
    outputUL.innerHTML = '';
    for (var i=0; i<itemArray.length; i++) {
        displayItem(itemArray[i], outputUL);
    }
    }
    //return(outputData);



/*
async function getJSON(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  .then( response => response.json() );
  return data; // parses JSON response into native JavaScript objects
}
/*
    var outputData;
    fetch(url)
    .then( response => {
        if(response.ok) {
            return response;
        }
            throw Error(response.statusText);
        }
    )
    .then( response => response.json() )
    .then( 
        data => {
            console.log(`inside then: ${data}`);
            outputData = data;
            console.log(`inside then: ${outputData}`);
            return(outputData);
/*        nextURL = data.next;
        prevURL = data.previous;
        itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i], outputUL);
        }
        }
        //return(outputData);
    )
    .catch( error => console.log('There was an error:', error));
}
*/

const jsonData = getJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02');
//const jsonData = getJSON('https://swapi.dev/api/people/');
console.log(`Log after all: ${jsonData}`);
//console.log(jsonData.toString);

jsonStr = JSON.stringify(jsonData);
console.log(`json version: ${jsonData}`);
console.log(`String version: ${jsonStr}`);
const output = document.getElementById("quakeList");
output.textContent = `output data: ${jsonStr}`;

