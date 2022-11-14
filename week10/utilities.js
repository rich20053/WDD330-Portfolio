function getJSON(url) {
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
            return(data);
/*        nextURL = data.next;
        prevURL = data.previous;
        itemArray = data.results;
        outputUL.innerHTML = '';
        for (var i=0; i<itemArray.length; i++) {
            displayItem(itemArray[i], outputUL);
        }*/
    })
    .catch( error => console.log('There was an error:', error));
}