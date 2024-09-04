import {toDoTask} from "./task.js";
import {project} from "./project.js";
import "./style.css"
import anime from "animejs";
import moment from "moment";

///~~~~~~~~~

//DOM Selectors
const pageTitleh1 = document.querySelector(".pageTitle>h1");
const listofProjects = document.querySelector(".listofProjects");
const newProjectBtn = document.querySelector(".newProjectBtn");
const newTaskBtn = document.querySelector(".newTaskBtn");
const userUI = document.querySelector(".userUI");
const hiddenMessage = document.querySelector(".hiddenMessage");

let projectsArray = [];
let i = 0;

///~~~~~~~~~

//anime.js animations
anime({
    targets: pageTitleh1,
    translateY: [-20,0],
    delay: 150,
    duration: 1000
});

///~~~~~~~~~

// default project/task + adding to List UI
const project1 = project("My Projects");
listofProjects.innerHTML += "<div><p>"+project1.getName() +"</p></div>";

const listofProjectsTxt = document.querySelector(".listofProjects>div");
listofProjectsTxt.classList.add("listofProjectsTxt");



const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");
project1.addtoDoList(task1);


listofProjectsTxt.innerHTML += "<div><p>"+ project1.printtoDoList() + "</p></div>";
const projectTasks = document.querySelector(".listofProjectsTxt>div>p");
projectTasks.classList.add("projectTasks");

//Button functions

newProjectBtn.addEventListener('click', ()=> {
    // const project1 = project("My Projects");
    // listofProjects.innerHTML += "<div><p>"+project1.getName() +"</p></div>";

    // const listofProjectsTxt = document.querySelector(".listofProjects>div");
    // listofProjectsTxt.classList.add("listofProjectsTxt");

    userUI.innerHTML = "<div class=\"pNamePicker\"> <label for =\"pName\"> Project Name: </label><input id=\"pName\" \" type=\"text\"></div>";
    userUI.innerHTML += "<div class=\"pNameContainer\"> <button class=\"pNameSubmitBtn\">Create Project</button></div>";

    const pNameSubmitBtn = document.querySelector(".pNameSubmitBtn");
    const pNameInput = document.querySelector("#pName");

    pNameSubmitBtn.addEventListener("click", ()=> {
    pNameSubmitBtn.classList.remove("pNameSubmitBtn");
    pNameSubmitBtn.classList.add("clickedpNameSubmitBtn");
    
    if(!pNameInput.value){
        hiddenMessage.textContent = "You can't leave this empty!";
    }
    else{
        hiddenMessage.textContent = "";
        projectsArray.push(project(pNameInput.value));
        listofProjects.innerHTML += "<div><p>"+projectsArray[i].getName() +"</p></div>";
        pNameInput.value ="";
    i++;
    }
})

}) 

newTaskBtn.addEventListener("click", ()=> {
    userUI.innerHTML = "";
    userUI.innerHTML +="<div class=\taskUI\"></div>";
    let userUIDetail = document.querySelector(".userUI>div");


    userUIDetail.innerHTML += "<div class=\taskProjectSelect\">    <label for =\"pNameSelection\"> Select Project:</label> <select id=\"pNameSelection\" ><option> Select Project</option> </select></div>";

    var select = document.getElementById("pNameSelection");
    
    for(var i = 0; i < projectsArray.length; i++) {
        var prj = projectsArray[i];
        var el = document.createElement("option");
        el.textContent = prj.getName();
        el.value = prj.getName();
        select.appendChild(el);
    }

    userUIDetail.innerHTML += "<div class=\"taskName\"> <label for =\"taskNameSelection\"> Task Name:</label><input id=\"taskNameSelection\" \" type=\"text\"> </div>";
    userUIDetail.innerHTML += "<div class=\"dueDate\"> <label for =\"dueDateSelection\"> Due Date:</label><input id=\"dueDateSelection\" \" type=\"date\" > </div>";
    userUIDetail.innerHTML += "<div class=\"priority\"> <label for =\"prioritySelection\"> Priority: </label><input id=\"prioritySelection\" \" type=\"date\" > </div>";

    const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");
    project1.addtoDoList(task1);

})



// task1.toggleStatus();
// task1.setDescription("Messy Bed");
// task1.setProject("Home Chores");
// task1.setdueDate("02/01/2024");
// task1.setpriority("Low");
// project1.printtoDoList();
// const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");



// const project2 = project("School"); 
// listofProjects.innerHTML += "<div><p>"+project2.getName() +"<p></div>";

// listofProjectsTxt.classList.add("listofProjects:hover");