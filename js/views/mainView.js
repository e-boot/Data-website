import { element } from "./components/element.js";
import {button} from "./components/button.js";
import { image } from "./components/image.js";


const container = document.getElementById('container');

function createMainView(){

    const viewContainer = document.createElement('div');

    // create h1 greeting 
    const greeting = element("h1",["greeting"],"Hi, i am Data!")
    viewContainer.appendChild(greeting);

    // create image 


    const avatar = image("/assets/avatar.png","data avatar")
    viewContainer.appendChild(avatar);

    // create 2 buttons/ links appearances/ bio
    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btn-container");

    const appearancesbtn = button("Apperances");
    const bioBtn= button("Biography");
    
    btnContainer.appendChild(appearancesbtn );
    btnContainer.appendChild(bioBtn);
    viewContainer.appendChild(btnContainer);




    container.appendChild(viewContainer);
    return viewContainer;
}

export {createMainView}