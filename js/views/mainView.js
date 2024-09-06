import { element } from "./components/element.js";
import { button } from "./components/button.js";
import { image } from "./components/image.js";
import { createBio } from "./bioView.js";
import { div } from "./components/div.js";
import { createAppearances } from "./appearancesView.js";


const container = document.getElementById('container');

 /**
     * Renders the page based on the current URL path
     * 
     * @param {string} pathname - The current URL path
     */
function createMainView() {
 
    container.innerHTML = ''; // clear container 

    window.history.pushState({},'', "/"); // update url to index.html
    const viewContainer = div(['view-container']);

    // create h1 greeting 
    const greeting = element("h1", ['greeting'], "Hi! I'm Data!");
    viewContainer.appendChild(greeting); // append h1 to view container


    // create combined image
    const combinedImage = image("/assets/combined_croped.png", "Data with background",["combined-image"]);
    viewContainer.appendChild(combinedImage);

    // create exploration text
    const explorationText = element("p", ["exploration-text"], "What do you wanna explore?");
    viewContainer.appendChild(explorationText);


    // create buttons container
    const btnContainer = div(['btn-container']);

    //create appearance button
    const appearancesBtn = button("Appearances");

    appearancesBtn.addEventListener('click', () => {
        container.innerHTML = '';
        createAppearances();
    });

    // create bio button
    const bioBtn = button("Biography");

    bioBtn.addEventListener('click', () => {
        container.innerHTML = '';
        createBio(); 
    });

    btnContainer.appendChild(appearancesBtn);
    btnContainer.appendChild(bioBtn);
    viewContainer.appendChild(btnContainer);

    container.appendChild(viewContainer);

    return viewContainer;
}

export { createMainView };