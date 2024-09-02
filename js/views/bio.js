import { createBackBtn } from "./components/backBtn.js";
import { createBanner } from "./components/banner.js";


// Get the container div
const container = document.getElementById('container');


function createBio() {

createBanner(container);
createBackBtn(container);
createMainContent(container);

}
// Create a main content area
function createMainContent(container){
const mainContent = document.createElement('div');
mainContent.style.backgroundColor = '#d4a572';
mainContent.style.padding = '20px';
mainContent.style.fontFamily = 'Arial, sans-serif';

// Create a title for the biography
const title = document.createElement('h1');
title.innerText = 'Biography';
title.style.textAlign = 'center';
mainContent.appendChild(title);

// Create a paragraph with biography details
const paragraph = document.createElement('p');
paragraph.innerText = `
    Data is a fictional character in Star Trek franchise.
    Data is a self-aware, sapient, sentient and anatomically fully functional male android who serves as the second officer and chief operations officer aboard the Federal starship USS Enterprise-D and later the USS Enterprise-E.
    Data is in many ways a successor to the original Star Trek's Spock, in that the character has superior mental skills and offers an "outsider's" perspective on humanity.
`;
paragraph.style.lineHeight = '1.6';
mainContent.appendChild(paragraph);

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
mainContent.appendChild(ul);

// Append the main content to the container
container.appendChild(mainContent);
}

function createImage(){
// Create an image of the character (optional)
const img = document.createElement('img');
img.src = '../../assets/avatar.png'; // Replace with the path to the actual image
img.style.width = '150px';
img.style.margin = '20px auto';
img.style.display = 'block';
mainContent.appendChild(img);

}

export {createBio}