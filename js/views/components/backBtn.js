
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
backButton.onclick = () => window.history.back();
container.appendChild(backButton);
    
}

export {createBackBtn}