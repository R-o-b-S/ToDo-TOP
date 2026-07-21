import { Element } from "./element.js";
import { projects } from "./project.js";

const list = []; //array that stores all the ToDo

list[0] = new Element ("none", "Spesa Micio", "12/07/2026", "high", "Comprare crocche e lettiera");

list[1] = new Element ("none", "Lavare auto", "11/07/2026", "low", "Non piu' tardi delle 11:00");

export function newTask () {  //form to enter new ToDo
    const project = document.getElementById("selectProject").value;
    const task = document.getElementById("addTask").value;
    const date = document.getElementById("addDue").value;
    const priority = document.getElementById("addPriority").value;
    const notes = document.getElementById("addNotes").value;
    list.push(new Element (project, task, date, priority, notes));
}

export function printList () { //print the entire ToDo list on console
    const l = list.length;
    for (let i=0; i<l; i++) {
        console.log("Project: " + list[i].project);
        console.log("Task: " + list[i].task);
        console.log("Due date: " + list[i].date);
        console.log("Priority: " + list[i].priority);
        console.log("Notes: " + list[i].notes);
        console.log("-----");
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