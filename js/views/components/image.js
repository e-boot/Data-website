

function image(path,alt){
    const image = document.createElement('img');
    image.alt = alt;
    image.src = path;

    return image;
}

export {image}