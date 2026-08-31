import "./styles.css";
import { printList , list } from "./element.js";

document.getElementById("printList").onclick = printList; //print the list of Tasks in console

//expandes on hover and back to normal too long text in task notes
const textBox = document.querySelector('.taskNotes');
textBox.addEventListener('mouseenter', () => {textBox.classList.add('expanded');});
textBox.addEventListener('mouseleave', () => {textBox.classList.remove('expanded');});

