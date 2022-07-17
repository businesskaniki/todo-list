const todoList = document.querySelector('.todo-item');
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
      
      tasks += `<li class="todo-ite2">
      <input type="checkbox" name="check" id="check">
      <input type="text" name="task" id="task" value="${task.description}" reuired>
      <i class="fa-solid fa-trash-can btn-delete"></i>
      </li>`;
    });

    todoList.innerHTML = tasks;
