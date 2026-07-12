export class Element {
    constructor(task, date, notes) {
        this.task = task;
        this.date = date;
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

