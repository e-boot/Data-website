/**
 * Creates a new HTML image element with the specified source path, alt text, and class list.
 *
 * @param {string} path - The source path of the image to be displayed (e.g. "image.jpg", "/path/to/image.png", etc.).
 * @param {string} alt - The alt text to be displayed if the image cannot be loaded.
 * @param {string} classList - A string of class names to be added to the image element (e.g. "image-class", "another-class", etc.).
 * @returns {HTMLImageElement} A new HTML image element with the specified source path, alt text, and class list.
 */
function image(path,alt,classList){
    const image = document.createElement('img');
    image.alt = alt;
    image.src = path;
    image.classList.add(classList);

    return image;
}

export {image}