
const form = document.forms['todo'];

form.addEventListener('submit', addTask, false);

function addTask(event) {
    debugger;
    event.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
        {
            method: 'POST',
            mode: 'cors',
            header: headers,
            body: JSON.stringify(task)
        }
    )

    fetch(request)
    .then( response => response.json() )
    .then( data => {
            const formOutput = document.getElementById("output");
            var dataTitle = `"${data.title}" saved with an id of ${data.id}`;
            dataTitle = dataTitle.replace("%20", " ");
            dataTitle = dataTitle.replace("%20", " ");
            dataTitle = dataTitle.replace("%20", " ");
            formOutput.textContent = dataTitle.replace("%20", " ");
        }
    )
    .catch( error => {
            const formOutput = document.getElementById("output");
            var dataError = `There was an error: ${dataError}`;
            dataError = dataError.replace("%20", " ");
            dataError = dataError.replace("%20", " ");
            dataError = dataError.replace("%20", " ");
            formOutput.textContent = error.replace("%20", " ");
        }   
    )
}