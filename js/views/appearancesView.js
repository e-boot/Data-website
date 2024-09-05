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
    const mainContent = div(['appearance-main-content']);

    createTitle(mainContent);
    createMovieCard(mainContent);  
    container.appendChild(mainContent);
}

/**
 * Creates the title element for the appearances section.
 * @param {HTMLElement} mainContent The main content element to append the title to.
 */
function createTitle(mainContent) {
    const title = element('h2', ["title"], 'Appearances');
    mainContent.appendChild(title);
}

/**
* Creates the movie cards and appends them to the main content.
* @param {HTMLElement} mainContent The main content element to append the movie cards to.
*/
async function createMovieCard(mainContent) {
    try {
        // Fetch movies data
        const movies = await getMovies();  

        movies.forEach(movie => {
            const movieCard = div(['movie-card']);
            
            const imageSrc = movieImages[movie.title] || 'default-image.jpg'; 
            const movieImage = image(imageSrc, ' ', 'movie-image');

            movieCard.appendChild(movieImage);

            const titleBox = div(['title-box']);
           
            const itemTitle = element('h3', ['item-title'], movie.title);
        
            const itemYear = element('h4', ['item-year'], movie.usReleaseDate);
            

            titleBox.appendChild(itemTitle);
            titleBox.appendChild(itemYear);
            movieCard.appendChild(titleBox);

            mainContent.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error creating movie cards:', error);

    }
}


export { createAppearances}