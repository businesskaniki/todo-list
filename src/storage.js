import { json } from "express";

let acceptdata = () => {
    const input = document.getElementById('text-input');

    let data = [];
    data.push({
        description:input.value,
        id:data.length,
        complete : false
    });

    localStorage.setItem("data",  json.stringify(data));
    
}

export default (acceptdata);