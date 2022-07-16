import display from './show.js';
import './style.css';
import Store from './store.js';
import Task from './create.js';
import checkchange from './change.js';

let tasksList;
if (Store.getData() === null) {
  tasksList = [];
} else {
  tasksList = Store.getData();
}

const add = (newTask) => {
  let index;
  if (Store.getData() === null) {
    index = 1;
  } else {
    tasksList = Store.getData();
    index = tasksList.length + 1;
  }
  const task = new Task(newTask, false, index);
  tasksList.push(task);
  Store.savetolist(tasksList);
  display.taskdisplay(tasksList);
};

const formclear = () => {
  document.querySelector('#add-new-task').value = '';
};

const newtodo = document.querySelector('#add-new-task');
newtodo.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && newtodo.value !== '') {
    const newTask = newtodo.value;
    add(newTask);
    formclear();
  }
});

display.taskdisplay(tasksList);

const btnRefresh = document.querySelector('#btn-refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
  display.reloadPage();
});

const clearall = document.querySelector('.btn-clear');
clearall.addEventListener('click', (e) => {
  checkchange.clearcheckedtask(e, tasksList);
  tasksList = Store.getData();
  display.updateIndex(tasksList);
  Store.savetolist(tasksList);
  tasksList = Store.getData();
  display.taskdisplay(tasksList);
});

const dreload = window.performance.getEntriesByType('navigation')[0].type;
if (dreload === 'reload') {
  display.reloadPage();
}
