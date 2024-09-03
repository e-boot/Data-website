import { createBackBtn } from "./components/backBtn.js";
import { createBanner } from "./components/banner.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";


const container = document.getElementById('container');

// main function to create bio page
function createBio() {
    container.innerHTML = ''; // clear container

    createBanner(container);
    createBackBtn(container);
    createMainContent(container);

}


// helper function :

function createMainContent(container){

// content container 
const mainContent = div('main-content');
mainContent.style.backgroundColor = '#d4a572';
mainContent.style.padding = '20px';
mainContent.style.fontFamily = 'Arial, sans-serif';
mainContent.style.fontSize = '12px'

createTitle(mainContent);
createImage(mainContent);
createDetails(mainContent);
createParagraph(mainContent);

container.appendChild(mainContent);
}


// helper functions of createMainContent() : 
function createTitle(mainContent) {
    const title = element('h2',["title",'Biography']);
    title.style.textAlign = 'center';
    mainContent.appendChild(title);
    }

function createDetails(mainContent){
   const detailsContainer = document.createElement('div');
   

   // Create a list for biography details
const ul = document.createElement('ul');
const details = [
    'Date of birth:',
    'Date of death:',
    'Place of birth:',
    'Place of death:',
    'Actor:'
];
details.forEach(detail => {
    const li = document.createElement('li');
    li.innerText = detail;
    ul.appendChild(li);
});
detailsContainer.appendChild(ul);


mainContent.appendChild(detailsContainer);
}


function createImage(mainContent){
    const img = document.createElement('img');
    img.src = '../../assets/combined_croped.png';
    img.style.width = '100%';
    img.style.margin = '20px auto';
    img.style.display = 'block';
mainContent.appendChild(img);
    
    }

   // Create a paragraph with bio
   function createParagraph(mainContent) {
    
    const paragraph = document.createElement('p');
    paragraph.innerText = `
        Data is a fictional character in Star Trek franchise.
        Data is a self-aware, sapient, sentient and anatomically fully functional male android who serves as the second officer and chief operations officer aboard the Federal starship USS Enterprise-D and later the USS Enterprise-E.\n
        Data is in many ways a successor to the original Star Trek's Spock, in that the character has superior mental skills and offers an "outsider's" perspective on humanity.
    `;
    paragraph.style.lineHeight = '1.7';
    mainContent.appendChild(paragraph);
   }

export {createBio}