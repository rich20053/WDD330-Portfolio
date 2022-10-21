let displayFilter = "All";

class Task {
    constructor(taskName, id, complete = false) {
        this.tName = taskName;
        //console.log(taskName);
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
            //NewTaskInput.focus();
            //NewTaskInput.value = "";
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
            //NewTaskInput.focus();
            //NewTaskInput.value = "";
            removeTask(this.tName);
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
        console.log(this.tdList);
        var myJSON = JSON.parse(window.localStorage.getItem('mytdlist'));
        if (myJSON != "") {
            for (var i=0; i<myJSON.length; i++) {
                console.log(myJSON[i]);
                var jsComplete = myJSON[i].complete; // == 'true' ? true : false;
                //debugger;
                var storedItem = new Task(myJSON[i].tName,myJSON[i].id, jsComplete);
                this.tdList.push(storedItem);
            }
        }
        console.log(this.tdList);
        this.displayList();
        //debugger;
    }

    addTask (task) {
        console.log("addTask");
        console.log(task.tName);
        console.log(this.tdList);
        this.tdList.push(task);
    }

    deleteTask (taskName) {
        //debugger;
        var i=0;
        for(i=0; i<this.tdList.length; i++) {
            console.log(`delete ${i} ${taskName} ${this.tdList[i].name}`);
            if (this.tdList[i].tName == taskName) {
                delete this.tdList[i];
                break;
            }
        }
        if (i < this.tdList.length - 1) {
            this.tdList = this.tdList.slice(0,i).concat(this.tdList.slice(i+1));
        }
        console.log(this.tdList);
    }

    completeTask (taskName) {
        //debugger;
        var i=0;
        for(i=0; i<this.tdList.length; i++) {
            console.log(`complete ${i} ${taskName} ${this.tdList[i].name}`);
            if (this.tdList[i].tName == taskName) {
                this.tdList[i].complete;
                break;
            }
        }
        console.log(this.tdList);
    }

    displayList () {
        var tasksRemaining = 0;
        var screenList = document.querySelector("ul");
        console.log("display List");
        var child = screenList.lastElementChild; 
        while (child) {
            screenList.removeChild(child);
            child = screenList.lastElementChild;
        }
        //debugger;
        var listCount = 0;
        if (this.tdList.length != 0 && this.tdList[0] != undefined) {
            for (var i=0; i<this.tdList.length; i++) {
                //debugger;
                console.log(this.tdList[i]);
                if (!undefined) {
                    //debugger;
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
        //debugger;
        var myJSON = JSON.stringify(this.tdList);   
        window.localStorage.setItem('mytdlist', myJSON);
        console.log(myJSON);
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

function removeTask(taskName) {
    myTDList.deleteTask(taskName);
    //myTDList.displayList();
}

function showActive() {
    //debugger;
    displayFilter = "Active";
    myTDList.displayList();
}

function showCompleted() {
    //debugger;
    displayFilter = "Complete";
    myTDList.displayList();
}

function showAll() {
    //debugger;
    displayFilter = "All";
    myTDList.displayList();
}

