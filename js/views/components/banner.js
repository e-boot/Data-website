// Create a header with the Star Trek title

const bannerContainer = document.getElementById('banner');

function createBanner() {
const banner = document.createElement('div');
banner.innerText = 'STAR TREK';
banner.style.backgroundColor = '#000';
banner.style.color = '#ffd700';
banner.style.padding = '5px';
banner.style.textAlign = 'center';
banner.style.fontFamily = 'Arial, sans-serif';
banner.style.fontSize = '24px';
banner.style.fontWeight = 'bold';
bannerContainer.appendChild(banner);

}

export {createBanner}