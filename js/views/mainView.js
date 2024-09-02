import { element } from "./components/element.js";
import { button } from "./components/button.js";
import { image } from "./components/image.js";

const container = document.getElementById('container');

function createMainView() {
    const viewContainer = document.createElement('div');
    viewContainer.classList.add('view-container');


    // create h1 greeting 
    const greeting = element("h1", ["greeting"], "Hi! I'm Data!");
    viewContainer.appendChild(greeting);


    // create combined image
    const combinedImage = image("/assets/combined_croped.png", "Data with background");
    combinedImage.classList.add('combined-image');
    viewContainer.appendChild(combinedImage);


    // create exploration text
    const explorationText = element("p", ["exploration-text"], "What do you wanna explore?");
    viewContainer.appendChild(explorationText);


    // create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btn-container");

    const appearancesBtn = button("Appearances");
    const bioBtn = button("Biography");


    // add event listeners to the buttons
    appearancesBtn.addEventListener('click', () => {
        window.location.href = "/appearances.html"; // change the path when needed
    });

    bioBtn.addEventListener('click', () => {
        window.location.href = "/biography.html"; // change the path when needed
    });


    btnContainer.appendChild(appearancesBtn);
    btnContainer.appendChild(bioBtn);
    viewContainer.appendChild(btnContainer);


    container.appendChild(viewContainer);
    return viewContainer;
}


export { createMainView };