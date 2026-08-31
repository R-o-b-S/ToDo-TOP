import "./styles.css";
import { printList , list } from "./element.js";

document.getElementById("printList").onclick = printList; //print the list of Tasks in console

//expandes on hover and back to normal too long text in task notes
const textBox = document.querySelector('.taskNotes');
textBox.addEventListener('mouseenter', () => {textBox.classList.add('expanded');});
textBox.addEventListener('mouseleave', () => {textBox.classList.remove('expanded');});

//sorting
function dateSorting (l) { //"l" for list of elements to be sorted
    const sorted = l.toSorted((a, b) => {
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
    console.log(sorted);
}

dateSorting(list);