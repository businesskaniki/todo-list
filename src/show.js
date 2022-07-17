import Store from './store.js';
import checkchange from './change.js';

export default class display {
  static updateIndex = (taskitems) => {
    for (let i = 0; i < taskitems.length; i += 1) {
      taskitems[i].index = i + 1;
    }
    return taskitems;
  }

  static removeTask = (target, btn, index) => {
    const currentLi = target.parentElement;
    currentLi.parentElement.removeChild(currentLi);

    let taskitems = Store.getData();
    taskitems = taskitems.filter((task, idx) => idx !== index);
    taskitems = this.updateIndex(taskitems);
    Store.savetolist(taskitems);
    this.taskdisplay(taskitems);
  }

  static editTask = (value, index, taskitems) => {
    taskitems[index].description = value;
    Store.savetolist(taskitems);
    this.taskdisplay(taskitems);
  }

  static reloadPage = () => {
    const taskitems = Store.getData();
    taskitems.forEach((task) => {
      task.completed = false;
    });
    Store.savetolist(taskitems);
  }

  static taskdisplay = (taskitems) => {
    const todoList = document.querySelector('.todo-list');
    let tasks = '';

    taskitems.forEach((task) => {
      let strike;
      let checked;
      if (task.completed === true) {
        strike = 'strike';
        checked = 'checked';
      } else {
        strike = '';
        checked = '';
      }
      
      tasks += `<li class="todo-item">
      <input type="checkbox" name="check" id="check">
      <input type="text" name="task" id="task" value="${task.description}" reuired>
      <i class="fa-solid fa-trash-can btn-delete"></i>
      </li>`;
    });

    todoList.innerHTML = tasks;
    const buttondelete = document.querySelectorAll('.btn-delete');
    buttondelete.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {

        this.removeTask(e.target, btn, index);
      });
    });

    const taskInput = document.querySelectorAll('#task');
    taskInput.forEach((task, index) => {
      task.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 && task.value !== '') {
          this.editTask(task.value, index, taskitems);
        }
      });
    });

    const checkBoxes = document.querySelectorAll('#check');
    checkBoxes.forEach((checkBox, index) => {
      checkBox.addEventListener('change', (e) => {
        checkchange.pagechange(checkBox, index, e.target, taskitems);
      });
    });
  }
}
