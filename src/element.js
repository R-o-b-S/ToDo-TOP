import { projects } from "./project.js";
import { storeItem , getItem } from "./storage.js";

export class Element { //Class for ToDo elements
    constructor(project, task, date, priority, notes) {
        this.project = project;
        this.task = task;
        this.date = date;
        this.priority = priority;
        this.notes = notes;
    }
}

//export const list = []; //array that stores all the ToDo

//list[0] = new Element ("none", "Spesa Micio", "12/07/2026", "high", "Comprare crocche e lettiera");

//list[1] = new Element ("none", "Lavare auto", "11/07/2026", "low", "Non piu' tardi delle 11:00");

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
    for (let i=0; i<l; i++) {
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