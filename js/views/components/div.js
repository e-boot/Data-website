/**
 * Creates a new HTML div element with optional class names.
 *
 * @param {string[]} [classNames=[]] - An array of class names to be added to the div element.
 * @returns {HTMLDivElement} A new HTML div element with the specified class names.
 */
function div(classNames = []) {
    const div =document.createElement('div');

    div.classList.add(...classNames);

    return div;

}

export {div}

