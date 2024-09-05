import { getCharacter } from "../services/character-service.js";
import { createBackBtn } from "./components/backBtn.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";
import { image } from "./components/image.js";

const container = document.getElementById('container');

// main function to create bio page
function createBio() {
    container.innerHTML = ''; // clear container

    createBackBtn(container);
    createMainContent(container);

}

/**
 * Async function to create the main content of the bio page
 * @param {HTMLElement} container The container element to append the main content to
 */
async function createMainContent(container){

    // content container 
    const mainContent = div('bio-main-content');
    createTitle(mainContent);
    createImage(mainContent);

    try{
        const characterInfo = await getCharacter();
        createDetails(mainContent,characterInfo);
    }catch(error){
        console.error('Failed to fetch and create character details',error);
    }
    createParagraph(mainContent);

    container.appendChild(mainContent);
}


/**
 * Helper function to create the title section
 * @param {HTMLElement} mainContent The main content container to append the title to
 */
function createTitle(mainContent) {
    const title = element('h2',["title"],'Biography');
    mainContent.appendChild(title);
    }

 /**
 * Helper function to create the details section
 * @param {HTMLElement} mainContent The main content container to append the details to
 * @param {Object} characterInfo The character info object
 */   
function createDetails(mainContent, characterInfo){
   const detailsContainer = div(['details-container']);
   
   // Create a list for biography details
    const ul = element('ul');
    const details = [
        `Date of birth: ${characterInfo.yearOfBirth || 'Unknown'}`,
        `Date of death: ${characterInfo.yearOfDeath || 'Unknown'}`,
        `Place of birth: ${characterInfo.placeOfBirth || 'Unknown'}`,
        `Place of death: ${characterInfo.placeOfDeath || 'Unknown'}`,
    ];
    details.forEach(detail => {
        const li = element('li');
        li.innerText = detail;
        ul.appendChild(li);
    });
    detailsContainer.appendChild(ul);


    mainContent.appendChild(detailsContainer);
}

/**
 * Helper function to create the image section
 * @param {HTMLElement} mainContent The main content container to append the image to
 */
function createImage(mainContent){
    const img = image('../../assets/combined_croped.png','Data image',"combined-image");
    mainContent.appendChild(img);
    }

/**
 * Helper function to create the paragraph section
 * @param {HTMLElement} mainContent The main content container to append the paragraph to
 */
function createParagraph(mainContent) {
 const paragraph = element('p');
 paragraph.innerText = `
     Data is a fictional character in Star Trek franchise.
     Data is a self-aware, sapient, sentient and anatomically 
     fully functional male android who serves as the second officer
      and chief operations officer aboard the Federal starship USS 
      Enterprise-D and later the USS Enterprise-E.\n
     Data is in many ways a successor to the original 
     Star Trek's Spock, in that the character has superior mental 
     skills and offers an "outsider's" perspective on humanity.
 `;
 
 mainContent.appendChild(paragraph);
}

export {createBio}