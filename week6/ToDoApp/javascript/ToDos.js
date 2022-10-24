//  Set filter flag
let displayFilter = "All";

//  Task Class represents 1 task in the list
class Task {
    constructor(taskName, id, complete = false) {
        this.tName = taskName;
        if (id == "") {
            this.id = Date.now();
        }
        else {
            this.id = id;
        }
        this.complete = complete;
        
    }

    // displaySelf - creates the HTML to display a task
    displaySelf() {
        // There are three elements to every task
        var NewTaskInput = document.querySelector('#newItem');
        let taskUL = document.querySelector('#taskList');
        // Task Container
        let item = document.createElement("li");
        item.setAttribute('class', `listItem`);
        // Completion checkbox
        let checkBox = document.createElement("input");
        checkBox.setAttribute('type', `checkbox`);
        checkBox.checked = this.complete;
        item.append(checkBox);
        // Listener attached to the checkbox to change display and task completion value
        checkBox.addEventListener('click', () => {
            this.complete = !this.complete;
            myTDList.displayList();
        })
        // Task description
        let itemLabel = document.createElement("label");
        itemLabel.textContent = this.tName;
        // Add a class to strike out the task text
        if (this.complete)
           itemLabel.setAttribute("class", "complete");
        item.append(itemLabel);
        // Delete button
        const delButton = document.createElement("button");
        delButton.textContent = "❌";
        // Add a listener to perform deletion when clicked
        delButton.addEventListener('click', () => {
            // Remove the HTML item
            taskUL.removeChild(item);
            NewTaskInput.focus();
            NewTaskInput.value = "";
            // Remove the item from the list
            removeTask(this.id);
            myTDList.displayList();
        })
        item.append(delButton);
        taskUL.append(item);    

        NewTaskInput.focus();
        NewTaskInput.value = "";    

    }
}

// TaskList is the container for the list of items displayed in the to do list
class TaskList {
    constructor() {
        this.tdList = new Array();
        // Pull the current list from the localStorage
        var myJSON = JSON.parse(window.localStorage.getItem('mytdlist'));
        // If a list exists in localStorage, create tasks and add them to this list
        if (myJSON != "" && myJSON != null) {
            for (var i=0; i<myJSON.length; i++) {
                var jsComplete = myJSON[i].complete;
                var storedItem = new Task(myJSON[i].tName,myJSON[i].id, jsComplete);
                this.tdList.push(storedItem);
            }
        }
        this.displayList();
    }

    // Add task to the array of tasks
    addTask (task) {
        this.tdList.push(task);
    }

    // Delete a task from the array of tasks
    deleteTask (taskID) {
        var i=0;
        // Find task by id
        for(i=0; i<this.tdList.length; i++) {
            if (this.tdList[i].id == taskID) {
                delete this.tdList[i];                
                break;
            }
        }
        // If a task is removed, shift objects to the left in the array
        if (i < this.tdList.length - 1) {
            this.tdList = this.tdList.slice(0,i).concat(this.tdList.slice(i+1));
        } 
        else {
            // If the task is at the end of the list, pop the null task off the end.
            if (i == this.tdList.length - 1) {
                this.tdList.pop();
            }
        }
    }

    // Send the list of Tasks to the HTML
    displayList () {
        var tasksRemaining = 0;
        var screenList = document.querySelector("ul");
        var child = screenList.lastElementChild;
        // Remove all current tasks from HTML
        while (child) {
            screenList.removeChild(child);
            child = screenList.lastElementChild;
        }
        // Add tasks currently in the task list
        var listCount = 0;
        if (this.tdList.length != 0 && this.tdList[0] != undefined) {
            for (var i=0; i<this.tdList.length; i++) {
                if (!undefined) {
                    // Filter display based on filter value
                    if ((displayFilter == "All") ||
                        (displayFilter == "Active" && !this.tdList[i].complete) ||
                        (displayFilter == "Complete" && this.tdList[i].complete)) {
                            this.tdList[i].displaySelf();
                            // Count items in displayed list
                            listCount++;
                        }
                    // Count open tasks
                    if (!this.tdList[i].complete)
                       tasksRemaining++;
                }
            }
        }
        // If no items are displayed, add a "No Tasks" line item.
        if (listCount == 0) {
            let taskUL = document.querySelector('#taskList');
            let listItem = document.createElement("li");
            listItem.setAttribute('class', `listItem`);
            let itemLabel = document.createElement("label");
            itemLabel.textContent = "No Tasks";
            listItem.append(itemLabel);
            taskUL.append(listItem);
        }
        document.getElementById("itemCount").textContent = `${tasksRemaining} Tasks Left`
        const NewTaskInput = document.querySelector('#newItem');
        NewTaskInput.focus();
        NewTaskInput.value = ""; 
        // Save current list to localStorage
        var myJSON = JSON.stringify(this.tdList);   
        window.localStorage.setItem('mytdlist', myJSON);
    }
}

// Create a global list
const myTDList = new TaskList();

// Global functions that are triggered by buttons
// Add Button
function addIt() {
    var NewTaskInput = document.querySelector('#newItem');
    var taskName = NewTaskInput.value; 
    if (taskName != "") {
        const thisTask = new Task(taskName, "", "");
        myTDList.addTask(thisTask);
        myTDList.displayList();
    }
    var NewTaskInput = document.querySelector('#newItem');
    NewTaskInput.focus();
    NewTaskInput.value = "";
}

// Delete Button
function removeTask(taskId) {
    myTDList.deleteTask(taskId);
    myTDList.displayList();
}

// Active Button
function showActive() {
    displayFilter = "Active";
    document.getElementById("subhead").textContent = "Active Tasks";
    myTDList.displayList();
}

// Completed Button
function showCompleted() {
    displayFilter = "Complete";
    document.getElementById("subhead").textContent = "Completed Tasks";
    myTDList.displayList();
}

// All Button
function showAll() {
    displayFilter = "All";
    document.getElementById("subhead").textContent = "All Tasks";
    myTDList.displayList();
}

