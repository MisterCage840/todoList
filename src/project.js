import toDoTask from "./task.js";

const project = function (name){
    const toDoList = [];
    const completedtoDoList = [];

    const getName = ()=> name;
    const setName = (newName) => name = newName;
    
    let list ="";
    const printtoDoList= () =>{
        toDoList.forEach(task => {
        list+= task.getTitle()+ "<br>";
    })
    return list;
    };
    const addtoDoList = (toDoTaskObj) => toDoList.push(toDoTaskObj);

    const addtoCompletedtoDoList = (completeTask) => completedtoDoList.push(completeTask);
    const getcompletedtodoList = () => completedtoDoList.forEach(completeTask => console.log(completeTask.printTask()));
    
    return {getName, setName , printtoDoList ,addtoDoList, getcompletedtodoList, addtoCompletedtoDoList};
}

export {project};
