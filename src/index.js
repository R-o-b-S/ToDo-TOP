import "./styles.css";
import { printList, newTask } from "./list.js";

document.getElementById("addTask").onclick = newTask;
document.getElementById("printList").onclick = printList;