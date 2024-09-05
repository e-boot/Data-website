/**
 * Creates a new HTML div element with the specified class names.
 * 
 * @param {string|string[]} [classNames=[]] The class names to add to the div element.
 * @returns {HTMLDivElement} The created div element.
 */
function div(classNames = []) {
    const div =document.createElement('div');

    div.classList.add(...classNames);

    return div;

}

export {div}

