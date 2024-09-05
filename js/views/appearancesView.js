import { createBackBtn } from "./components/backBtn.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";
import { movieImages } from "./components/movies-images.js";
import { image } from "./components/image.js";
import { getMovies } from "../services/character-service.js";  // Corrected import from services

const container = document.getElementById('container');

/**
 * Creates the appearances page of the application
 * 
 * @returns {Promise<void>}
 */
async function createAppearances() {
    container.innerHTML = '';
    
    await createBackBtn(container);
    await createMainContent(container);
    window.history.pushState({},'', "/appearances");
}

/**
 * Creates the main content of the appearances page
 * 
 * @param {HTMLElement} container - The container element
 * @returns {Promise<void>}
 */
async function createMainContent() {
    const mainContent = div(['appearance-main-content']);

    await createTitle(mainContent);
    await createMovieCard(mainContent);  
    container.appendChild(mainContent);
}

/**
 * Creates the title element
 * 
 * @param {HTMLElement} mainContent - The main content element
 */
function createTitle() {
    const title = element('h2', ["title"], 'Appearances');
    container.appendChild(title);
}

/**
 * Creates the movie cards
 * 
 * @param {HTMLElement} mainContent - The main content element
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