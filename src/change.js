import Store from './store.js';

export default class checkchange {
  static pagechange = (checkBox, index, target, taskitems) => {
    const currentLi = target.parentElement;
    const taskDescription = currentLi.querySelector('#task');

    if (checkBox.checked) {
      taskDescription.classList.add('strike');
      taskitems[index].completed = true;
    } else {
      taskDescription.classList.remove('strike');
      taskitems[index].completed = false;
    }

    Store.savetolist(taskitems);
  }

  static clearcheckedtask = (e, taskitems) => {
    taskitems = Store.getData();
    taskitems = taskitems.filter((task) => task.completed === false);
    Store.savetolist(taskitems);
  }
}
