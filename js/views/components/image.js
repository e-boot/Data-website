/**
 * Creates an image element with the specified path, alt text, and class list.
 * 
 * @param {string} path The path to the image file.
 * @param {string} alt The alt text for the image.
 * @param {string|string[]} classList The class list for the image element.
 * @returns {HTMLImageElement} The created image element.
 */
function image(path,alt,classList){
    const image = document.createElement('img');
    image.alt = alt;
    image.src = path;
    image.classList.add(classList);

    return image;
}

export {image}