import { element } from "/js/views/components/element.js";

/**
 * Creates a new HTML button element with the specified text, event handler, and optional additional class name.
 *
 * @param {string} text - The text to be displayed on the button.
 * @param {function} event - The event handler to be attached to the button.
 * @param {string} [additionalClass=""] - An optional additional class name to be added to the button element.
 * @returns {HTMLElement} A new HTML button element with the specified text, event handler, and class names.
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
