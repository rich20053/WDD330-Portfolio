// main javascript file
let displayFilter = "All";

import Task from "./task.js";
import TaskList from "./tasklist.js";

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
