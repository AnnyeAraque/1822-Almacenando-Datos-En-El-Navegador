import { createTask } from "./addTask";
import { dateElement } from "./dateElement.js";
import { uniqueDatas } from "../services/date";

export const readTasks = () =>{
    const list = document.querySelector('[data-list]');
    console.log(list);

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDatas(taskList);

    console.log(dateElement('14/02/2023'));

    taskList.forEach((task) => {
        
        list.appendChild(dateElement(task.dateFormat));
        list.appendChild(createTask(task));
    });
}