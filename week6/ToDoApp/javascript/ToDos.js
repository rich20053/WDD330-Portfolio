
class Task {
    constructor(taskName, id, complete) {
        this.tName = taskName;
        console.log(taskName);
        const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
        if (id == "") {
            this.id = new Date().toLocaleDateString('en-US', options);
        }
        else {
            this.id = id;
        }
        if (complete == "") {
            this.complete = false;
        }
        else {
            this.complete == complete;
        }
    }

    displaySelf() {
        var NewTaskInput = document.querySelector('#newItem');
        let taskUL = document.querySelector('#taskList');
        let item = document.createElement("li");
        item.setAttribute('class', `listItem`);

        let checkBox = document.createElement("input");
        checkBox.setAttribute('type', `checkbox`);
        item.append(checkBox);

        let itemLabel = document.createElement("label");
        itemLabel.textContent = this.tName;
        item.append(itemLabel);
        const delButton = document.createElement("button");
        delButton.textContent = "❌"; //X
        delButton.addEventListener('click', () => {
            taskUL.removeChild(item);
            NewTaskInput.focus();
            NewTaskInput.value = "";
            removeTask(this.tName);
            //myTDList.displayList();
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
        //debugger;
        if (myJSON != "") {
            for (var i=0; i<myJSON.length; i++) {
                var storedItem = new Task(myJSON[i].tName,myJSON[i].id, myJSON[i].complete);
                this.tdList.push(storedItem);
            }
        }
        console.log(this.tdList);
        this.displayList();
    }

    addTask (task) {
        console.log("addTask");
        console.log(task.tName);
        console.log(this.tdList);
        this.tdList.push(task);
    }

    deleteTask (taskName) {
        for(var i=0; i<this.tdList.length; i++) {
            console.log(`delete ${i} ${taskName} ${this.tdList[i].name}`);
            if (this.tdList[i].tName == taskName) {
                delete this.tdList[i];
                break;
            }
        }
    }

    displayList () {
        var screenList = document.querySelector("ul");
        console.log("display List");
        var child = screenList.lastElementChild; 
        while (child) {
            screenList.removeChild(child);
            child = screenList.lastElementChild;
        }
        //debugger;
        if (this.tdList.length != 0) {
            for (var i=0; i<this.tdList.length; i++) {
                console.log(this.tdList[i]);
                this.tdList[i].displaySelf();
            }
        }
        else {
            let taskUL = document.querySelector('#taskList')
            let itemLabel = document.createElement("label");
            itemLabel.textContent = "No Tasks";
            taskUL.append(itemLabel);
        }
        const NewTaskInput = document.querySelector('#newItem');
        NewTaskInput.focus();
        NewTaskInput.value = ""; 
        var myJSON = JSON.stringify(this.tdList);   
        window.localStorage.setItem('mytdlist', myJSON);
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
    myTDList,displayList();
}
/*
    // Change the textContent property of the h2 element to contain the business name
    h3.textContent = `${business.name}`;
    h3.setAttribute('id', "bizname");
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    // Change the src and alt properties of the img1 element to contain the business icon
    img1.src = `${business.icon}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p2 element to contain the 1 line business address
    p1.textContent = `${business.address}, ${business.city}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the 2 line business address
    p2.innerHTML = `${business.address}<br>${business.city}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the textContent property of the p3 element to contain the business phone number
    p3.textContent = `${business.phone}`;
    // Add/append the section(card) with the p3 element
    card.appendChild(p3);
    // Change the properties of the a element to contain the business website
    a.href = `${business.website}`;
    a.target = "_blank";
    a.textContent = `${business.website}`;
    // Add/append the section(card) with the a element
    card.appendChild(a);
    // Change the textContent property of the p4 element to contain the business contact email
    p4.textContent = `${business.contact}`;
    // Add/append the section(card) with the p4 element
    card.appendChild(p4);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#bizdir').appendChild(card);
*/
