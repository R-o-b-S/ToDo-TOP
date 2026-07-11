import { Element } from "./element.js";

const list = [];

list[0] = new Element ("Spesa Micio", "12/07/2026", "Comprare crocche e lettiera");

list[1] = new Element ("Lavare auto", "11/07/2026", "Non piu' tardi delle 11:00");

export function printList () {
    const l = list.length;
    for (let i=0; i<l; i++) {
        console.log("Task: " + list[i].task);
        console.log("Due date: " + list[i].date);
        console.log("Notes: " + list[i].notes);
        console.log("-----");
    }
}
