const toDoTask = function (title, description,dueDate, priority, project= "My projects", status = "Not Complete") {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 

    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;

    const getdueDate = () => dueDate;
    const setdueDate = (newDate) => dueDate = newDate;
    
    const getpriority = () => priority;
    const setpriority = (newPriority) => priority = newPriority;

    const printTask = ()=> "Title: "+getTitle() + ", Description: "+getDescription()+
        ", due Date: "+ getdueDate() + ", Priority: "+getpriority()+ " , Project: "+
        getProject() + " , Status: "+getStatus();

    const getProject = () => project;
    const setProject = (newProject) => project = newProject;
     
    const getStatus = () => status;
    const toggleStatus = () => {
        status = (status == "Not Complete") ? "Complete" : "Not Complete";
    }

    return {getTitle, setTitle, getDescription, setDescription, getdueDate, setdueDate, 
            getpriority, setpriority, printTask, getProject, setProject, getStatus,
            toggleStatus};
}

export {toDoTask};