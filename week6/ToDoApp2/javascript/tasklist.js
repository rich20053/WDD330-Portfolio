
export default class TaskList {
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
        else {
            if (i == this.tdList.length - 1) {
                this.tdList.pop();
            }
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
    }
}


