/**
 * Creates a new HTML element with the specified tag, class names, text content, and event listener.
 * 
 * @param {string} tag The tag name of the element to create.
 * @param {string|string[]} [classNames=[]] The class names to add to the element.
 * @param {string} [textContent=""] The text content to set for the element.
 * @param {function} [event=null] The event listener to add to the element for the "click" event.
 * @returns {HTMLElement} The created HTML element.
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