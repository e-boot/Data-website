/**
 * Creates a new HTML element with the specified tag name, class names, text content, and optional event handler.
 *
 * @param {string} tag - The tag name of the element to be created (e.g. "div", "button", "p", etc.).
 * @param {string[]} [classNames=[]] - An optional array of class names to be added to the element.
 * @param {string} [textContent=""] - An optional string of text content to be added to the element.
 * @param {function} [event=null] - An optional event handler function to be attached to the element's click event.
 * @returns {HTMLElement} A new HTML element with the specified tag name, class names, text content, and event handler.
 */
function element(tag, classNames = [], textContent = "", event = null) {
    const element = document.createElement(tag);
  
    classNames.forEach((className) => element.classList.add(className));
  
    if (textContent) {
      element.textContent = textContent;
    }
  
    if (event && typeof event === "function") {
      element.addEventListener("click", event);
    }
  
    return element;
  }
  
  export { element };