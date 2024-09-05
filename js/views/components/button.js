import { element } from "/js/views/components/element.js";

/**
 * Creates a new HTML button element with the specified text, event listener, and additional class name.
 * 
 * @param {string} text The text content to set for the button element.
 * @param {function} event The event listener to add to the button element for the "click" event.
 * @param {string} [additionalClass=""] The additional class name to add to the button element.
 * @returns {HTMLButtonElement} The created button element.
 */
function button(text, event, additionalClass = "") {
  return element(
    "button",
    ["btn", additionalClass].filter(Boolean),
    text,
    event
  );
}

export { button };
