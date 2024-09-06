import { renderPage } from './router.js';
import {createBanner} from './views/components/banner.js'

createBanner();

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        const path = event.target.getAttribute('href');

        window.history.pushState({},'',path);

        renderPage(path);
    });
    
});

window.addEventListener('popstate', () => {
    renderPage(document.location.pathname);
});

renderPage(document.location.pathname);