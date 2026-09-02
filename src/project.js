import { storeItem , getItem } from "./storage.js";

class Project { //Class for projects
    constructor(project, color) {
        this.project = project;
        this.color = color;
    }
}

export let projects = []; //array that stores the list of projects and related color

function loadProjects () {
    const check = getItem("projects");
    if (check === null) {
        const project = "none";
        const color = "#708090";
        projects.push(new Project (project, color));
        storeItem ("projects", projects);
        showProjects ();
    }
    else {
        projects = check;
        showProjects();
    }
}

loadProjects(); //loads projects in lenght 0 of localStorage

function displayPrjForm () { //displays form to add new project
    const element = document.getElementById("newProject");
    element.showModal();
}
document.getElementById("addPrj").onclick = displayPrjForm;

function submitPrjForm () { //submit form to add new project
    newProject();
    closePrjForm ();
    clearPrjList();
    showProjects();
}
document.getElementById("submitPrjForm").onclick = submitPrjForm;

function closePrjForm () { //close form without saving
    const element = document.getElementById("newProject");
    element.close();
    const form = document.getElementById("collectPrj");
    form.reset();
    event.preventDefault(); // Prevent auto page reload
}
document.getElementById("cancelPrjForm").onclick = closePrjForm;

function newProject () {  //form to enter new project
    const project = document.getElementById("addProject").value;
    const color = document.getElementById("addColor").value;
    projects.push(new Project (project, color));
    localStorage.removeItem("projects");
    storeItem ("projects", projects);
}


function showProjects () {
    const counter = projects.length;
    for (let i=0; i<counter; i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "prjItem";
        newDiv.id = "prj" + i;
        document.getElementById("projectsList").appendChild(newDiv);

        const colorDiv = document.createElement("div");
        colorDiv.classList = "taskProject";
        colorDiv.id = "prj" + i + "color";
        const color = projects[i].color;
        colorDiv.style.backgroundColor = color;
        document.getElementById("prj"+i).appendChild(colorDiv);

        const nameDiv = document.createElement("div");
        nameDiv.id = "prj" + i + "name";
        let txt = projects[i].project;
        nameDiv.textContent = txt;
        document.getElementById("prj"+i).appendChild(nameDiv);
    }
}

function clearPrjList () {
    const counter = projects.length-1;
    for (let i=0; i<counter; i++) {
        const element = document.getElementById("prj"+i);
        element.remove();
    }
}