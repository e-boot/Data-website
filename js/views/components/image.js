

function image(path,alt,classList){
    const image = document.createElement('img');
    image.alt = alt;
    image.src = path;
    image.classList.add(classList);

    return image;
}

export {image}