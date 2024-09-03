function div(classNames = []) {
    const div =document.createElement('div');

    div.classList.add(classNames);
    return div;

}

export {div}

