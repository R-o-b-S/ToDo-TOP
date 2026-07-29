import { projects } from "./project.js";
import { storeItem , getItem } from "./storage.js";

class Element { //Class for ToDo elements
    constructor(project, task, date, priority, notes) {
        this.project = project;
        this.task = task;
        this.date = date;
        this.priority = priority;
        this.notes = notes;
    }
}

let toDo = "";
let key = "";

export function newTask () {  //form to enter new ToDo
    const project = document.getElementById("selectProject").value;
    const task = document.getElementById("addTask").value;
    const date = document.getElementById("addDue").value;
    const priority = document.getElementById("addPriority").value;
    const notes = document.getElementById("addNotes").value;
    toDo = new Element (project, task, date, priority, notes);  //generate a new toDo
    key = localStorage.length; // generate the key for the latest toDo
    storeItem(key, toDo); //sends the lastest toDo in localStorage
}

export function printList () { //print the entire ToDo list on console (from localStorage)
    const l = localStorage.length;
    for (let i=1; i<l; i++) { //starting from 1 because length = 0 will be occupied by projects
        const print = getItem(i);
        console.log(print);
    }
}

function displayForm () { //displays form to add new ToDo
    prjSelection();
    const element = document.getElementById("newToDo");
    element.showModal();
}
document.getElementById("addToDo").onclick = displayForm;

function submitForm () { //submit form to add new ToDo
    newTask();
    closeForm ();
}
document.getElementById("submitForm").onclick = submitForm;

function closeForm () { //close form without saving
    const element = document.getElementById("newToDo");
    element.close();
    const form = document.getElementById("collect");
    form.reset();
    clearPrjSelection();  //clear project selection
    event.preventDefault(); // Prevent auto page reload
}
document.getElementById("cancelForm").onclick = closeForm;

function prjSelection () { //add the list of projects on the ToDo form
    const counter = projects.length;
    for (let i=0; i<counter; i++){
        const newOp = document.createElement("option");
        newOp.id = projects[i].project;
        newOp.value = projects[i].project;
        const txt = projects[i].project;
        newOp.textContent = txt;
        document.getElementById("selectProject").appendChild(newOp);
    }
}

function clearPrjSelection () { //clear project selection
    const counter = projects.length;
    for (let i=0; i<counter; i++){
        const element = document.getElementById(projects[i].project);
        element.remove();
    }
}

function today () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const today = year + "-" + month + "-" + day;
    return today;
}

function welcomeToDo () { //adds one task to the list to welcome the user first time website get accessed
    const check = localStorage.length;
    if (check === 1){
        const project = "none";
        const task = "welcome";
        const date = today();
        const priority = "low";
        const notes = "add your first ToDo";
        toDo = new Element (project, task, date, priority, notes);  //generate a new toDo
        key = localStorage.length; // generate the key for the latest toDo
        storeItem(key, toDo); //sends the lastest toDo in localStorage
    }
    else {return;}
}

welcomeToDo();