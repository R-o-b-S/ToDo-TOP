import "./styles.css";
import { list } from "./element.js";

//expandes on hover and back to normal too long text in task notes
const textBox = document.querySelector('.taskNotes');
textBox.addEventListener('mouseenter', () => {textBox.classList.add('expanded');});
textBox.addEventListener('mouseleave', () => {textBox.classList.remove('expanded');});

