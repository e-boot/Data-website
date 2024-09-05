import { createBackBtn } from "./components/backBtn.js";
import { div } from "./components/div.js";
import { element } from "./components/element.js";
import { movieImages } from "./components/movies-images.js";
import { image } from "./components/image.js";
import { getMovies } from "../services/character-service.js";  // Corrected import from services

const container = document.getElementById('container');

/**
 * Function to create the appearances page
 * 
 * Clears the container, creates the back button, main content, and updates the URL
 */
async function createAppearances() {
    container.innerHTML = '';
    
    await createBackBtn(container);
    await createMainContent(container);
    window.history.pushState({},'', "/appearances");
}

/**
 * Function to create the main content of the appearances page
 * 
 * Creates the title and movie cards, and appends them to the container
 * 
 * @param {HTMLElement} container The container element to append the main content to
 */
async function createMainContent() {
    const mainContent = div(['appearance-main-content']);

    await createTitle(mainContent);
    await createMovieCard(mainContent);  
    container.appendChild(mainContent);
}

/**
 * Function to create the title of the appearances page
 * 
 * Creates an h2 element with the text "Appearances" and appends it to the container
 * 
 * @param {HTMLElement} container The container element to append the title to
 */
function createTitle() {
    const title = element('h2', ["title"], 'Appearances');
    container.appendChild(title);
}

/**
 * Function to create the movie cards
 * 
 * Fetches the movies data, creates a movie card for each movie, and appends them to the main content
 * 
 * @param {HTMLElement} mainContent The main content element to append the movie cards to
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