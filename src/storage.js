import { list } from "./list.js";

function storeItem (key, item) {
    localStorage.setItem(key, JSON.stringify(item));
}

function getItem (key) {
    let tempItem = localStorage.getItem(key);
    tempItem = JSON.parse(tempItem);
    return tempItem;
}

export function save () {
    const l = list.length;
    for (let i=0; i<l; i++) {
        storeItem (i,list[i]);
    }
}

export function load () {
    const l = list.length;
    for (let i=0; i<l; i++) {
        const print = getItem(i);
        console.log(print);
    }
}