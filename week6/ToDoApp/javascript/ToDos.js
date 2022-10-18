
class Task {
    constructor(taskName) {
        const name = taskName;
        const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
        const id = new Date().toLocaleDateString('en-US', options);
        var complete = false;
    }
}

const taskList = [];

function addIt() {
    var taskName = document.getElementById("newItem").value; 
    const thisTask = new Task(taskName);
    taskList.push(thisTask);
    console.log(taskList);
    console.log(thisTask);
    console.log(taskName);
    const screenList = document.getElementById("taskList");
    const item = document.createElement("li");
    item.setAttribute('class', "listItem");
    item.innerHTML = `<input type="checkbox">
    <label>${taskName}</label>
    <button onclick="deleteIt()">X</button>`;
    screenList.appendChild(item);
}
