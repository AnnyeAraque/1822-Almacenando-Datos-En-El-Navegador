import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/ReadTasks.js"

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
