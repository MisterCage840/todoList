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
let priorities = ["Low", "Medium", "High"];
let tempTask
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



//populate dropdown list
const populate = (array,select)=> {            
    for(var i = 0; i < array.length; i++) {
        var prj = array[i];
        var el = document.createElement("option");
        el.textContent = prj.getName();
        el.value = prj.getName();    
        select.appendChild(el);
    }
}

//populate priorities
const populatePr = (array,select)=> {            
    for(var i = 0; i < array.length; i++) {
        var el = document.createElement("option");
        el.textContent = array[i];
        el.value = array[i];    
        select.appendChild(el);
    }
}

//display Error message function
const displayErrorMessage = (message,inputdisplay) => {
    inputdisplay.textContent = message;
}


// clear content function 
const clearContent = (container) => {
    container.textContent = ""
}

// default project/task + adding to List UI
// const project1 = project("My Projects");
// listofProjects.innerHTML += "<div><p>"+project1.getName() +"</p></div>";

// const listofProjectsTxt = document.querySelector(".listofProjects>div");
// listofProjectsTxt.classList.add("listofProjectsTxt");



// const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");
// project1.addtoDoList(task1);


// listofProjectsTxt.innerHTML += "<div><p>"+ project1.printtoDoList() + "</p></div>";
// const projectTasks = document.querySelector(".listofProjectsTxt>div>p");
// projectTasks.classList.add("projectTasks");

//Button functions

newProjectBtn.addEventListener('click', ()=> {
    // const project1 = project("My Projects");
    // listofProjects.innerHTML += "<div><p>"+project1.getName() +"</p></div>";

    // const listofProjectsTxt = document.querySelector(".listofProjects>div");
    // listofProjectsTxt.classList.add("listofProjectsTxt");
    hiddenMessage.textContent = "";

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



//new Task Btn event Handler
newTaskBtn.addEventListener("click", ()=> {
    if(projectsArray.length == 0){
        hiddenMessage.textContent = "Please create a Project First!"
    }else{
        userUI.innerHTML = "";
        userUI.innerHTML +="<div class=\"taskUI\"></div>";
        let userUIDetail = document.querySelector(".userUI>div");


        userUIDetail.innerHTML += "<div class=\taskProjectSelect\">    <label for =\"pNameSelection\"> Select Project:</label> <select id=\"pNameSelection\" ><option>Select Project</option> </select></div>";

        var selectpName = document.getElementById("pNameSelection");
        
        populate(projectsArray,selectpName);

        userUIDetail.innerHTML += "<div class=\"taskName\"> <label for =\"taskNameSelection\"> Task Name:</label><input id=\"taskNameSelection\" \" type=\"text\"> </div>";
        userUIDetail.innerHTML += "<div class=\"dueDate\"> <label for =\"dueDateSelection\"> Due Date:</label><input id=\"dueDateSelection\" \" type=\"date\" > </div>";
        userUIDetail.innerHTML += "<div class=\"priority\"> <label for =\"prioritySelection\"> Select Priority:</label> <select id=\"prioritySelection\" ><option> Select Priority</option> </select></div>";

        var selectPriority = document.getElementById("prioritySelection")
        populatePr(priorities,selectPriority)

        //submit Btn
        userUIDetail.innerHTML += "<div class=\"addTaskBtnContainer\"> <button class=\"addTaskBtn\">Add Task </button> </div>";

        const addTaskBtn = document.querySelector(".addTaskBtn")
        const taskNameSelection = document.querySelector("#taskNameSelection")
        const dueDateSelection = document.querySelector("#dueDateSelection")
        const pNameSelection = document.querySelector("#pNameSelection")
        const prioritySelection = document.querySelector("#prioritySelection")


        //submit Task btn Handler
        addTaskBtn.addEventListener("click", (event)=> {
            clearContent(hiddenMessage)

            event.preventDefault();
            if(pNameSelection.value =="Select Project"){
                clearContent(hiddenMessage)
                displayErrorMessage("Please select the project this task is intended for", hiddenMessage)
            }
            else if(!taskNameSelection.value){
                clearContent(hiddenMessage)
                displayErrorMessage("Please Enter a name for your task!", hiddenMessage)    
            }else if(dueDateSelection.value ==""){
                clearContent(hiddenMessage)
                displayErrorMessage("Please select a Date!",hiddenMessage)
            }
            else if(prioritySelection.value == "Select Priority"){
                clearContent(hiddenMessage)
                displayErrorMessage("Please select a prioity for your task",hiddenMessage)
            }

            else {
                var tempTask = toDoTask(taskNameSelection.value, "", dueDateSelection.value, prioritySelection.value, pNameSelection.value, "Not complete")

                projectsArray.forEach(project => {
                    if(project.getName() == pNameSelection.value){
                        project.addtoDoList(tempTask)

                        const listofProjectsTxt = document.querySelector(".listofProjects>div")
                        listofProjectsTxt.classList.add("listofProjectsTxt")
                        listofProjectsTxt.innerHTML += "<div><p>"+ project.printtoDoList() + "</p></div>"
                        var projectTasks = document.querySelector(".listofProjectsTxt>div>p");
                        projectTasks.classList.add("projectTasks")
                    }
                })

                // const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");
                // project1.addtoDoList(task1);


                // listofProjectsTxt.innerHTML += "<div><p>"+ project1.printtoDoList() + "</p></div>";
                // const projectTasks = document.querySelector(".listofProjectsTxt>div>p");
                // projectTasks.classList.add("projectTasks");



                // const listofProjectsTxt = document.querySelector(".listofProjects>div");
                // listofProjectsTxt.classList.add("listofProjectsTxt");
            }
        })
        
    }
})





// task1.toggleStatus(  );
// task1.setDescription("Messy Bed");
// task1.setProject("Home Chores");
// task1.setdueDate("02/01/2024");
// task1.setpriority("Low");
// project1.printtoDoList();
// const task1 = toDoTask("Make my Bed", "", "01/01/2024", "High");



// const project2 = project("School"); 
// listofProjects.innerHTML += "<div><p>"+project2.getName() +"<p></div>";

// listofProjectsTxt.classList.add("listofProjects:hover");