export function storeItem (key, item) { //saves a single ToDO in local storage
    localStorage.setItem(key, JSON.stringify(item));
}

export function getItem (key) { //gets a single ToDO from local storage
    let tempItem = localStorage.getItem(key);
    tempItem = JSON.parse(tempItem);
    return tempItem;
}
