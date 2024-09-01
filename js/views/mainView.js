import { element } from "./components/element.js";

const container = document.getElementById('container');

function createMainView(){

    // create h1 greeting 
    const greeting = element("h1",["greeting"],"Hi, i am Data!")
    container.appendChild(greeting);

    // create image 


    // create 2 buttons/ links appearances/ bio

    return greeting;
}

export {createMainView}