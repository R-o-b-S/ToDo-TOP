export const projects = [ //array that stores the list of projects and related color
    {
        project: "none",
        color: "#708090"
    }
];

class Project { //Class for projects
    constructor(project, color) {
        this.project = project;
        this.color = color;
    }
}

function displayPrjForm () { //displays form to add new project
    const element = document.getElementById("newProject");
    element.showModal();
}
document.getElementById("addProject").onclick = displayPrjForm;

function submitPrjForm () { //submit form to add new project
    newProject();
    closePrjForm ();
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
    
    projects.push (new Project (project, color));
}