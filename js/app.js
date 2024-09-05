import { renderPage, route } from './router.js';
import { createBanner } from './views/components/banner.js';

/**
 * Event listener for when the initial HTML document has been completely loaded and parsed.
 * 
 * @param {Event} event - The DOMContentLoaded event
 */
window.addEventListener("DOMContentLoaded", () => {
    // Render the correct page on initial load
    createBanner();
    renderPage(window.location.pathname);

    // Attach the route event to all 
    document.querySelectorAll('button').forEach(anchor => {
        anchor.addEventListener('click', route());
    });
});

