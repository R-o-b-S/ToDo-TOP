import "./styles.css";
import { printList, newTask } from "./list.js";

document.getElementById("printList").onclick = printList;

function displayForm () {
    const element = document.getElementById("newToDo");
    element.showModal();
}

document.getElementById("addToDo").onclick = displayForm;

function submitForm () {
    newTask();
    closeForm ();
}

document.getElementById("submitForm").onclick = submitForm;

function closeForm () {
    const element = document.getElementById("newToDo");
    element.close();
    const form = document.getElementById("collect");
    form.reset();
    event.preventDefault(); // Prevent auto page reload
}

document.getElementById("cancelForm").onclick = closeForm;