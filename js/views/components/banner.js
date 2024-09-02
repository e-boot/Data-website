// Create a header with the Star Trek title
function createBanner(container) {
const header = document.createElement('div');

header.style.backgroundColor = '#000';
header.style.color = '#ffd700';
header.style.padding = '5px';
header.style.textAlign = 'center';
header.style.fontFamily = 'Arial, sans-serif';
header.style.fontSize = '24px';
header.innerText = 'STAR TREK';
container.appendChild(header);

}

export {createBanner}