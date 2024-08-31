import {toDoTask} from "./task.js";
import {project} from "./project.js";

const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");
console.log(task1.printTask());

const project1 = project("My projects");
project1.addtoDoList(task1);

project1.printtoDoList();