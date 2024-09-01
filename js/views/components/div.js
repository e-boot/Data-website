import {element } from "./element";

function div(classNames = []) {
    const div = element("div", classNames);

    return div;

}

export {div}