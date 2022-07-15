import _ from 'lodash';
import './style.css';
import acceptdata from './storage.js';

const form = document.getElementById('form');
const input = document.getElementById('text-input');
const msg = document.getElementById('error');
const tasks = document.getElementById('list');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    formvalidation();
})

let formvalidation = () => {
    if(input.value === ""){
        msg.innerHTML = `task cannot be blank`
    }
    else {
        msg.innerHTML = ''
        getdata();
    }
}

let data = {};

let getdata = () => {
//    acceptdata();
//    addtoscreen();
}

let addtoscreen = () => {
    const li = document.createElement('li');
    li.classList.add('listItem')
    li.innerHTML += `
    <div class="small-txt">
    <input type = "checkbox">
    <h5>${data.description}</h5>
    </div>
    <i   class="fa fa-ellipsis-v" aria-hidden="true"></i>
  `
  tasks.appendChild(li);
  li.addEventListener('click' ,removeTask);
  resetform();
}


function removeTask(e){
    const item = e.target;
    if (item.classList[1] === "fa-ellipsis-v"){
        item.parentElement.innerHTML = `
        <div class="small-txt-edit">
        <input type = "checkbox">
        <input type = "text"  class="input2" placeholder="${data.description}">
        <div class="icons"><i class="fa fa-trash" aria-hidden="true"></i><div/>
        </div>
         `
    }

    if(item.classList[1] === "fa-trash"){
        item.parentElement.parentElement.remove()
    }
    const dataid = data['id'];
}

let resetform = () => {
    input.value = "";
}

