export class Element { //Class for ToDo elements
    constructor(project, task, date, priority, notes) {
        this.project = project;
        this.task = task;
        this.date = date;
        this.priority = priority;
        this.notes = notes;
    }

    get elementTask () {
        return this.task;
    }
    get elementDate () {
        return this.date;
    }
    get elementNotes () {
        return this.notes;
    }

    set elementTask (newTask) {
        this.task = newTask;
    }
    set elementDate (newDate) {
        this.date = newDate;
    }
    set elementNotes (newNotes) {
        this.notes = newNotes;
    }
}

export const projects = [ //array that stores the list of projects and related color
    {
        project: "none",
        color: "grey"
    }
];