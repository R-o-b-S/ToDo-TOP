import { list } from "./element.js";
import { projects } from "./project.js";

function getColor (item) {
    const count = projects.length;
    for (let e=0; e<count; e++){
        if (item === projects[e].project) {
            return projects[e].color;
        }
    }
}

export function showTasks () {
    const counter = list.length;
    for (let i=0; i<counter; i++){
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
        txt = "complete";
        compButt.textContent = txt;
        document.getElementById("buttons"+i).appendChild(compButt);

        const edButt = document.createElement("button");
        edButt.classList = "editTask";
        edButt.id = "g"+i;
        txt = "edit";
        edButt.textContent = txt;
        document.getElementById("buttons"+i).appendChild(edButt);

        const erButt = document.createElement("button");
        erButt.classList = "eraseTask";
        erButt.id = "h"+i;
        txt = "erase";
        erButt.textContent = txt;
        document.getElementById("buttons"+i).appendChild(erButt);
    }
}


function clearDom () {
    const counter = list.length-1;
    for (let i=0; i<counter; i++) {
        const element = document.getElementById("index"+i);
        console.log(element);
        element.remove();
    }
}

export function refreshDom () {
    clearDom();
    showTasks();
}