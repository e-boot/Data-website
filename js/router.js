import { createMainView } from "./views/mainView.js";
import { createAppearances } from "./views/appearancesView.js";
import { createBio } from "./views/bioView.js";

const routes = [
    {path: '/', page: createMainView},
    {path: '/index',page: createMainView},
    { path: '/biography', page: createBio},
    { path:'/appearances', page: createAppearances}
]

// Function to find route and render a page
export function renderPage(path) {
    // Find the correct route given the path
    const route = routes.find(r => r.path === path);

    if (route) {
        route.page();
    } else {
        createMainView();
    }
}
