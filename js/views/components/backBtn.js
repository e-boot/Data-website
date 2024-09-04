import { createMainView } from "../mainView.js";



function createBackBtn(container) {
    // Create a back button
const backButton = document.createElement('button');
backButton.innerText = '< Back';
backButton.style.margin = '10px';
backButton.style.backgroundColor = '#F8D08D';
backButton.style.border = 'none';
backButton.style.borderRadius = '10px',
backButton.style.padding = '5px 10px';
backButton.style.cursor = 'pointer';
backButton.style.fontWeight = 'bold';
backButton.style.display = 'block';
backButton.onclick = () => window.history.back();

backButton.addEventListener('click', (event) => {
   event.preventDefault(); 
    createMainView();

    // change url 
    window.history.pushState({},'','/index.html');
});

container.appendChild(backButton);

    
}

export {createBackBtn}