import { list } from "./element.js";

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
        return 0;
    });
}