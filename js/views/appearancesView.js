import { createBackBtn } from "./components/backBtn.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";
import { movieImages } from "./components/movies-images.js";
import { image } from "./components/image.js";
import { getMovies } from "../services/character-service.js";  // Corrected import from services

const container = document.getElementById('container');

async function createAppearances() {
    container.innerHTML = '';

    createBackBtn(container);
    createMainContent();  
}

async function createMainContent() {
    const mainContent = div(['main-content']);

    mainContent.style.padding = '20px';
    mainContent.style.fontFamily = 'Arial, sans-serif';
    mainContent.style.fontSize = '18px';

    createTitle(mainContent);
    createMovieCard(mainContent);  
    container.appendChild(mainContent);
}

// Title
function createTitle(mainContent) {
    const title = element('h2', ["title"], 'Appearances');
    title.style.textAlign = 'center';
    mainContent.appendChild(title);
}

// Movie Cards
async function createMovieCard(mainContent) {
    try {
        // Fetch movies data
        const movies = await getMovies();  

        movies.forEach(movie => {
            const movieCard = div(['movie-card']);

            const imageSrc = movieImages[movie.title] || 'default-image.jpg'; 
            const imageCard = createImageCard(imageSrc);
            movieCard.appendChild(imageCard);

            const titleBox = div(['title-box']);
            titleBox.style.backgroundColor = '#000';
            titleBox.style.alignContent = 'center';

            const itemTitle = element('h3', ['item-title'], movie.title);
            itemTitle.style.color = 'white';
            itemTitle.style.fontWeight = 'bold';
            itemTitle.style.textAlign = 'center';
            itemTitle.style.margin = '10px';

            const itemYear = element('h4', ['item-year'], movie.usReleaseDate);
            itemYear.style.color = 'white';
            itemYear.style.fontWeight = 'normal';
            itemYear.style.textAlign = 'center';
            itemYear.style.margin = '10px';

            titleBox.appendChild(itemTitle);
            titleBox.appendChild(itemYear);
            movieCard.appendChild(titleBox);

            mainContent.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error creating movie cards:', error);

    }
}

// Image Card
function createImageCard(imageSrc) {
    const imageCard = div(['movie-image-card']);
    imageCard.style.textAlign = 'center';
    imageCard.style.margin = '0 auto';
    const movieImage = image(imageSrc, ' ', 'movie-image');
    movieImage.style.alignContent = 'center';
    imageCard.appendChild(movieImage);
    return imageCard;
}

export { createAppearances}