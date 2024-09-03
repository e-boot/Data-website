import { renderPage, route } from './router.js';

window.addEventListener("DOMContentLoaded", () => {
    // Render the correct page on initial load
    renderPage(window.location.pathname);

    // Attach the route event to all anchor tags
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', route);
    });
});

