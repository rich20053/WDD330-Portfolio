let displayFilter = "All";

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

    displaySelf() {
        var NewTaskInput = document.querySelector('#newItem');
        let taskUL = document.querySelector('#taskList');
        let item = document.createElement("li");
        item.setAttribute('class', `listItem`);

        let checkBox = document.createElement("input");
        checkBox.setAttribute('type', `checkbox`);
        checkBox.checked = this.complete;
        item.append(checkBox);
        checkBox.addEventListener('click', () => {
            NewTaskInput.focus();
            NewTaskInput.value = "";
            this.complete = !this.complete;
            myTDList.displayList();
        })

        let itemLabel = document.createElement("label");
        itemLabel.textContent = this.tName;
        if (this.complete)
           itemLabel.setAttribute("class", "complete");
        item.append(itemLabel);
        const delButton = document.createElement("button");
        delButton.textContent = "❌";
        delButton.addEventListener('click', () => {
            taskUL.removeChild(item);
            NewTaskInput.focus();
            NewTaskInput.value = "";
            removeTask(this.id);
            myTDList.displayList();
        })
        item.append(delButton);
        taskUL.append(item);    

        NewTaskInput.focus();
        NewTaskInput.value = "";    

    }
}

class TaskList {
    constructor() {
        this.tdList = new Array();
        var myJSON = JSON.parse(window.localStorage.getItem('mytdlist'));
        if (myJSON != "" && myJSON != null) {
            for (var i=0; i<myJSON.length; i++) {
                var jsComplete = myJSON[i].complete;
                var storedItem = new Task(myJSON[i].tName,myJSON[i].id, jsComplete);
                this.tdList.push(storedItem);
            }
        }
        this.displayList();
    }

    addTask (task) {
        this.tdList.push(task);
    }

    deleteTask (taskID) {
        var i=0;
        for(i=0; i<this.tdList.length; i++) {
            if (this.tdList[i].id == taskID) {
                delete this.tdList[i];                
                break;
            }
        }
        if (i < this.tdList.length - 1) {
            this.tdList = this.tdList.slice(0,i).concat(this.tdList.slice(i+1));
        }
        if (i == this.tdList.length - 1) {
            this.tdList.pop();
        }
    }

    displayList () {
        var tasksRemaining = 0;
        var screenList = document.querySelector("ul");
        var child = screenList.lastElementChild; 
        while (child) {
            screenList.removeChild(child);
            child = screenList.lastElementChild;
        }
        var listCount = 0;
        if (this.tdList.length != 0 && this.tdList[0] != undefined) {
            for (var i=0; i<this.tdList.length; i++) {
                if (!undefined) {
                    if ((displayFilter == "All") ||
                        (displayFilter == "Active" && !this.tdList[i].complete) ||
                        (displayFilter == "Complete" && this.tdList[i].complete)) {
                            this.tdList[i].displaySelf();
                            listCount++;
                        }
                    if (!this.tdList[i].complete)
                       tasksRemaining++;
                }
            }
        }
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
        var myJSON = JSON.stringify(this.tdList);   
        window.localStorage.setItem('mytdlist', myJSON);
        console.log(window.localStorage.getItem('mytdlist'));
        console.log(this.tdList);
    }
}

const myTDList = new TaskList();

function addIt() {
    var taskName = document.getElementById("newItem").value; 
    if (taskName != "") {
        const thisTask = new Task(taskName, "", "");
        myTDList.addTask(thisTask);
        myTDList.displayList();
    }
}

function removeTask(taskId) {
    myTDList.deleteTask(taskId);
    myTDList.displayList();
}

function showActive() {
    displayFilter = "Active";
    document.getElementById("subhead").textContent = "Active Tasks";
    myTDList.displayList();
}

function showCompleted() {
    displayFilter = "Complete";
    document.getElementById("subhead").textContent = "Completed Tasks";
    myTDList.displayList();
}

function showAll() {
    displayFilter = "All";
    document.getElementById("subhead").textContent = "All Tasks";
    myTDList.displayList();
}

