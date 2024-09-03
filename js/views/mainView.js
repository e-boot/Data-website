import { element } from "./components/element.js";
import { button } from "./components/button.js";
import { image } from "./components/image.js";
import { createBio } from "./bioView.js";
import { 
    getCharacter,
    getPerformer,
    getEpisodes,
    getMovies,
    getCharacterRelations,
    getTitles,
    getOrganization
} from "../services/character-service.js";

const container = document.getElementById('container');

function createMainView() {

    container.innerHTML = '';
    window.history.pushState({},'', "/index.html");
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
        window.location.href = "/appearances.html"; 
    });

    bioBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('button clicked');
        createBio();
        window.history.pushState({},'', "/bio.html");
    });


    btnContainer.appendChild(appearancesBtn);
    btnContainer.appendChild(bioBtn);
    viewContainer.appendChild(btnContainer);


    //! --Service Test (Remove After)--

    getCharacter().then((character) => {
        console.log('Character:', character);
    }).catch((error) => {
        console.error('Error fetching character:', error);
    });
    
    getPerformer().then((performer) => {
        console.log('Performer:', performer);
    }).catch((error) => {
        console.error('Error fetching performer:', error);
    });

    getEpisodes().then((episodeInfo) => {
        console.log('Episodes:', episodeInfo);
    }).catch((error) => {
        console.error('Error fetching episodes:', error);
    });
    
    getMovies().then((movieInfo) => {
        console.log('Movies:', movieInfo);
    }).catch((error) => {
        console.error('Error fetching movies:', error);
    });

    getCharacterRelations().then((charRelations) => {
        console.log('Character Relations:', charRelations);
    }).catch((error) => {
        console.error('Error fetching char relations:', error);
    });
    
    getTitles().then((title) => {
        console.log('Title:', title);
    }).catch((error) => {
        console.error('Error fetching title:', error);
    });
    
    getOrganization().then((org) => {
        console.log('Organization:', org);
    }).catch((error) => {
        console.error('Error fetching organization:', error);
    });

    // ! Remove Test

    container.appendChild(viewContainer);
    return viewContainer;
}

export { createMainView };