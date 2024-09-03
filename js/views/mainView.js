import { element } from "./components/element.js";
import { button } from "./components/button.js";
import { image } from "./components/image.js";
import { createBio } from "./bioView.js";
import { div } from "./components/div.js";
import { createAppearances } from "./appearancesView.js";

const container = document.getElementById('container');

function createMainView() {

    container.innerHTML = ''; // clear container 

    window.history.pushState({},'', "/index.html"); // update url to index.html
    const viewContainer = div('view-container');

    // create h1 greeting 
    const greeting = element("h1", ["greeting"], "Hi! I'm Data!");
    viewContainer.appendChild(greeting); // append h1 to view container


    // create combined image
    const combinedImage = image("/assets/combined_croped.png", "Data with background",["combined-image"]);
    viewContainer.appendChild(combinedImage);

    // create exploration text
    const explorationText = element("p", ["exploration-text"], "What do you wanna explore?");
    viewContainer.appendChild(explorationText);


    // create buttons container
    const btnContainer = div('btn-container');

    //create appearance button
    const appearancesBtn = button("Appearances");
    
    appearancesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('button clicked');
        createAppearances();
        window.history.pushState({},'', "/appearances.html");
    });


    // create bio button
    const bioBtn = button("Biography");

    bioBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('button clicked');
        createBio();
        window.history.pushState({},'', "/bio.html");
    });

    


    btnContainer.appendChild(appearancesBtn);
    btnContainer.appendChild(bioBtn);
    viewContainer.appendChild(btnContainer);

    container.appendChild(viewContainer);

    return viewContainer;
}


export { createMainView };