const toDoTask = function (title, description,dueDate, priority) {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 

    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;

    const getdueDate = () => dueDate;
    const setdueDate = (newDate) => dueDate = newDate;
    
    const getpriority = () => priority;
    const setpriority = (newPriority) => priority = newPriority;

    const printTask = ()=> "Title: "+getTitle() + ", Description: "+getDescription()+
        ", due Date: "+ getdueDate() + ", Priority: "+getpriority();

    return {getTitle, setTitle, getDescription, setDescription, getdueDate, setdueDate, 
            getpriority, setpriority, printTask};
}

export {toDoTask};