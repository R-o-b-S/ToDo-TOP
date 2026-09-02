import { list } from "./element.js";
import { projects } from "./project.js";

export function storeItem (key, item) { //saves a single ToDO in local storage
    localStorage.setItem(key, JSON.stringify(item));
}

export function getItem (key) { //gets a single ToDO from local storage
    let tempItem = localStorage.getItem(key);
    tempItem = JSON.parse(tempItem);
    return tempItem;
}

//sorting
export function dateSorting () {
    list.sort((a, b) => {
        const dateA = new Date (a.date); 
        const dateB = new Date (b.date); ;
        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }
        else { //priority
            if (a.priority === "low" && b.priority === "medium" || b.priority === "high") {
                return 1;
            }
            if (a.priority === "medium" && b.priority === "high") {
                return 1;
            }
            if (a.priority === "medium" && b.priority === "low") {
                return -1;
            }
            if (a.priority === "high" && b.priority === "medium" || b.priority === "low") {
                return -1;
            }
            return 0;
        }
    
    });
}

export function sortByProject () {
    console.log ("test sort by Project");
    const sorting = [];
    const sorted = [];
    const cP = projects.length;
    const cL = list.length;
    for (let i=0; i<cP; i++) {
        for (let a=0; a<cL; a++) {
            if (projects[i].project === list[a].project) {
                sorting.push(list[a]);
            }
        }
        dateSorting(sorting);
        const cS = sorting.length;
        for (let e=0; e<cS; e++) {
            sorted.push(sorting[e]);
        }
        sorting.splice(0, sorting.length);
    }
    list.splice(0, list.length);
    for (let i=0; i<cL; i++) {
        list.push(sorted[i]);
    }
}