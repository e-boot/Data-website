import {element } from "./element";

function div(classNames = []) {
    const div =document.createElement('div');

    div.classList.add('container');
    return div;

}

export {div}