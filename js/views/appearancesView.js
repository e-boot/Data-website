import { createBackBtn } from "./components/backBtn.js";
import { createBanner } from "./components/banner.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";
import { movieImages } from "./components/movies-images.js";
import { image } from "./components/image.js";

const container = document.getElementById('container');

async function createAppearances() {
    container.innerHTML = '';

    createBanner(container);
    createBackBtn(container);
    createMainContent();
}

function createMainContent() {
    const mainContent = div(['main-content']);

    mainContent.style.padding = '20px';
    mainContent.style.fontFamily = 'Arial, sans-serif';
    mainContent.style.fontSize = '18px'

    createTitle(mainContent);
    createMovieCard(mainContent);

    container.appendChild(mainContent);
}

//title
function createTitle(mainContent) {
    const title = element('h2',["title"],'Appearances');
    title.style.textAlign = 'center';
    mainContent.appendChild(title);

}

function createMovieCard(mainContent) {
    movieImages.forEach(movie => {
        const movieCard = div(['movie-card']);

        const imageCard = createImageCard(movie.image);
        movieCard.appendChild(imageCard);

        const titleBox = div(['title-box']);
        titleBox.style.backgroundColor = '#000'
        titleBox.style.alignContent = 'center';
        
        const itemTitle = element('h3', ['item-title'], movie.title);
        itemTitle.innerText = movie.title;
        itemTitle.style.color = 'white';
        itemTitle.style.fontWeight = 'bold';
        itemTitle.style.textAlign = 'center';
        itemTitle.style.margin = '10px';
        
        const itemYear = element('h4', ['item-year'], movie.year);
        itemYear.innerText = movie.year;
        itemYear.style.color = 'white';
        itemYear.style.fontWeight = 'normal'
        itemYear.style.textAlign = 'center';
        itemYear.style.margin = '10px';
        titleBox.appendChild(itemTitle);
        titleBox.appendChild(itemYear);
        movieCard.appendChild(titleBox);

        mainContent.appendChild(movieCard);
    });
}

function createImageCard(imageSrc) {
    const imageCard = div(['movie-image-card']);
    imageCard.style.textAlign = 'center';
    imageCard.style.margin = '0 auto';
    const movieImage = image(imageSrc, ' ', 'movie-image');
    movieImage.style.alignContent = 'center';
    imageCard.appendChild(movieImage);
    return imageCard;
}

export { createAppearances };

