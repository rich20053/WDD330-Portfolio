export default class Task {
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

