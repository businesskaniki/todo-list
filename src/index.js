import _ from 'lodash';
import './style.css';

const todos = [
    {
        description: "first task todo",
        completed: true,
        idex: 1
    },
    {
        description: "second task todo",
        completed: false,
        idex: 2
    },
    {
        description: "third task todo",
        completed: true,
        idex: 3
    },
];

console.log(todos.description);
const ul = document.getElementById('list');

todos.forEach(element => {
    const listItem = document.createElement('li');
    listItem.classList.add('listitem');
    listItem.innerHTML = `
            <div class="small-txt">
            <input type = "checkbox">
            <h5>${element.description}</h5>
            </div>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>

    `
    ul.appendChild(listItem);
})
