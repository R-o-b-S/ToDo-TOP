import { Element , projects } from "./element.js";

const list = []; //array that stores all the ToDo

list[0] = new Element ("none", "Spesa Micio", "12/07/2026", "high", "Comprare crocche e lettiera");

list[1] = new Element ("none", "Lavare auto", "11/07/2026", "low", "Non piu' tardi delle 11:00");

export function newTask () {  //form to enter new ToDo
    const project = document.getElementById("addProject").value;
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