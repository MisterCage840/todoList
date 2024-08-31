import toDoTask from "./task.js";

const project = function (name){
    const toDoList = [];

    const getName = ()=> name;
    const setName = (newName) => name = newName;
    
    const printtoDoList= () => toDoList.forEach(task => console.log(task.printTask()));
    const addtoDoList = (toDoTaskObj) => toDoList.push(toDoTaskObj);
    
    return {getName, setName , printtoDoList ,addtoDoList};
}

export {project};
