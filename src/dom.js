import { list , displayEditForm } from "./element.js";
import { projects } from "./project.js";
import { storeItem , dateSorting } from "./storage.js";

function getColor (item) {
    const count = projects.length;
    for (let e=0; e<count; e++){
        if (item === projects[e].project) {
            return projects[e].color;
        }
    }
}

export let edit = "";

export function showTasks () {
    dateSorting(list);
    if (showCompleted === true) {
        const counter = list.length;
        for (let i=0; i<counter; i++){
            printTask (i);
        }
    }
    else if (showCompleted === false) {
        const counter = list.length;
        for (let i=0; i<counter; i++){
            if (list[i].complete === "false") {
                printTask (i);
            }
        }
    }
}

function printTask (i) {
    const newDiv = document.createElement("div");
    newDiv.classList = "task";
    newDiv.id = "index" + i;
    document.getElementById("main").appendChild(newDiv);

    const infoDiv = document.createElement("div");
    infoDiv.classList = "taskInfo";
    infoDiv.id = "info" + i;
    document.getElementById("index"+i).appendChild(infoDiv);

    const prDiv = document.createElement("div");
    prDiv.classList = "taskProject";
    prDiv.id = "a" + i;
    const color = getColor(list[i].project);
    prDiv.style.backgroundColor = color;
    document.getElementById("info"+i).appendChild(prDiv);

    const tsDiv = document.createElement("div");
    tsDiv.classList = "taskName";
    tsDiv.id = "b" + i;
    let txt = list[i].task;
    tsDiv.textContent = txt;
    document.getElementById("info"+i).appendChild(tsDiv);

    const dueDiv = document.createElement("div");
    dueDiv.classList = "taskDueDate";
    dueDiv.id = "c" + i;
    txt = list[i].date;
    dueDiv.textContent = txt;
    document.getElementById("info"+i).appendChild(dueDiv);

    const prioDiv = document.createElement("div");
    prioDiv.classList = "taskPriority";
    prioDiv.id = "d" + i;
    txt = list[i].priority;
    prioDiv.textContent = txt;
    document.getElementById("info"+i).appendChild(prioDiv);

    const noDiv = document.createElement("div");
    noDiv.classList = "taskNotes";
    noDiv.id = "e" + i;
    txt = list[i].notes;
    noDiv.textContent = txt;
    document.getElementById("info"+i).appendChild(noDiv);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttons" + i;
    buttonsDiv.style.minWidth = "170px";
    buttonsDiv.style.textAlign = "end";
    document.getElementById("index"+i).appendChild(buttonsDiv);

    const compButt = document.createElement("button");
    compButt.classList = "completeTask";
    compButt.id = "f"+i;
    if (list[i].complete === "true") {
        txt = "undone";
        infoDiv.style.textDecoration = "line-through";
    }
    else if (list[i].complete === "false" ){
        txt = "complete";
    }
    
    compButt.textContent = txt;
    compButt.addEventListener ("click", () => {
        const c = list.length;
        clearDom(c);
        list[i].complete = "true";
        storeItem("tasks", list);
        showTasks();
    });
    document.getElementById("buttons"+i).appendChild(compButt);

    const edButt = document.createElement("button");
    edButt.classList = "editTask";
    edButt.id = "g"+i;
    txt = "edit";
    edButt.textContent = txt;
    edButt.addEventListener ("click", () => {
        edit = edButt.id.replace("g", "");
        displayEditForm();
    });
    document.getElementById("buttons"+i).appendChild(edButt);

    const erButt = document.createElement("button");
    erButt.classList = "eraseTask";
    erButt.id = "h"+i;
    txt = "erase";
    erButt.textContent = txt;
    erButt.addEventListener ("click", () => {
        deleteTask(i);
    });
    document.getElementById("buttons"+i).appendChild(erButt);
}


export function clearDom (c) {
    if (showCompleted === true) {
        for (let i=0; i<c; i++) {
            const element = document.getElementById("index"+i);
            element.remove();
        }
    }
    else if (showCompleted === false) {
        for (let i=0; i<c; i++) {
            if (list[i].complete === "false") {
                const element = document.getElementById("index"+i);
                element.remove();
            }
        }
    }
}

export function refreshDom () {
    const counter = list.length-1;
    clearDom(counter);
    showTasks();
}

function deleteTask (n) {
    const counter = list.length;
    clearDom (counter);
    list.splice(n, 1);
    showTasks();
    storeItem("tasks", list); //stores the latest tasks list
}

let showCompleted = false;

function hideCompleted () {
    const element = document.getElementById("completeToggle");
    element.remove();
    if (showCompleted === true) {
        const compButt = document.createElement("button");
        compButt.classList = "test";
        compButt.id = "completeToggle";
        let txt = "Show Completed";
        compButt.textContent = txt;
        compButt.addEventListener ("click", () => {
            hideCompleted();
        });
        document.getElementById("butt3").appendChild(compButt);
        const c = list.length;
        clearDom(c);
        showCompleted = false;
        showTasks();
    }
    else if (showCompleted === false) {

        const compButt = document.createElement("button");
        compButt.classList = "test";
        compButt.id = "completeToggle";
        let txt = "Hide Completed";
        compButt.textContent = txt;
        compButt.addEventListener ("click", () => {
            hideCompleted();
        });
        document.getElementById("butt3").appendChild(compButt);
        const c = list.length;
        clearDom(c);
        showCompleted = true;
        showTasks();
    }
    
}

document.getElementById("completeToggle").onclick = hideCompleted;