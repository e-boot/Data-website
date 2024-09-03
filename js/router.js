import { createMainView } from "./views/mainView.js";
import { createAppearances } from "./views/appearancesView.js";
import { createBio } from "./views/bioView.js";

const routes = {
    '/': createMainView,
    '/index.html': createMainView,
    '/bio.html': createBio,
    '/appearances.html': createAppearances
};

export function renderPage(path) {
    const page = routes[path] || createMainView;
    page();
}

export function route(event) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    
    // Update the browser URL without reloading the page
    window.history.pushState({}, "", path);

    // Render the new page
    renderPage(path);
}

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
    renderPage(window.location.pathname);
});
