# SPA - Final Assignment Project ✨ 

## Project Overview 🚀

This project involves creating a themed single-page application (SPA) inspired by the Star Trek character, Data. The application is built using HTML, CSS, and JavaScript and consumes data from the Star Trek API (STAPI). It provides users with comprehensive information about Data, including episodes, appearances, and character details, while offering an engaging and interactive experience. The project is a collaborative effort aimed at enhancing skills in full-stack development, REST API integration, and modern web development practices.

## Technologies Used 🛠️

- **HTML5**: For structuring and organizing the content of the web pages.
- **CSS3**: For styling the web pages and ensuring responsive design across devices.
- **JavaScript**: For adding interactivity and dynamically displaying data retrieved from APIs.
- **STAPI**: The primary API used for retrieving detailed information about Data from the Star Trek universe.

## API Used 📡

- **STAPI (Star Trek API)**: [STAPI Documentation](http://stapi.co) - This API provides detailed information on characters, episodes, starships, and more from the Star Trek universe. It's the core data source for this project, enabling us to fetch and display relevant details about the character Data.

## Project Structure 🗂️

The project follows a structured directory layout to ensure clarity and maintainability:

```
/ (Root Directory)
│
├── index.html                      # Main HTML file
│
├── app.js                          # Main JavaScript file
│
├── css/                            # Directory for CSS files
│   └── styles.css                  # Main stylesheet
│
├── js/                             # Directory for JavaScript files
│   ├── services/                   # Service components
│   │   └── character-service.js    # Character service for handling API requests
│   ├── views/                      # Directory for view components
│   │   ├── components/             # Directory for individual components
│   │   │   ├── appearancesView.js  # View for character appearances
│   │   │   ├── bioView.js          # View for biography
│   │   │   ├── mainView.js         # Main view script
│   ├── router.js                   # Router for managing app navigation
│
├── assets/                         # Directory for assets like images
│   ├── movie-images/               # Images for movies and characters
│   │   ├── default-image.jpeg
│   │   ├── first-contact.jpeg
│   │   ├── generations.jpeg
│   │   ├── insurrection.jpeg
│   │   ├── nemesis.jpeg
│   │   ├── the next generation.jpg
│   ├── avatar.png
│   ├── background.png
│   ├── combined.png
│   ├── combined_cropped.png
│
├── README.md                       # Project documentation
│
└── .gitignore                      # Git ignore file
```

## Development Workflow 🔄

1. **HTML**: Develop the structure and layout of the web pages.
2. **CSS**: Apply styling, ensuring the design is responsive across different devices.
3. **JavaScript**: Add interactivity, manage user inputs, and integrate with the STAPI to display dynamic content.

## Setup Instructions 📝

To get started with the project, clone the repository using the following commands:

```bash
# HTTPS
git clone https://github.com/e-boot/Data-website.git

# SSH
git clone git@github.com:e-boot/Data-website.git
```

## Suggested Future Improvements 💡

### 1. Q&A Section Implementation
We suggest adding a **Q&A (Question and Answer)** section where users can interact with the app by asking questions about the character Data or episodes and receiving automated responses. This could be built using:

- **JavaScript**: To handle the dynamic logic and response generation.
- **API Integration**: Using a secondary API or local knowledge base for handling questions related to the Star Trek universe.
- **User Interface**: Add a simple input field for questions and a response section to display the answers.

### 2. Enhanced Desktop Layout (CSS Approach)
We plan to improve the CSS design approach for desktop devices by:

- **Media Queries**: Ensuring a smooth, responsive design transition between mobile and desktop.
- **Flexible Layout**: Utilizing CSS Grid or Flexbox to manage complex layouts effectively on larger screens.
- **Animations and Transitions**: Adding CSS animations to enhance user interaction, such as hover effects on buttons and image transitions.

## Contributors 👥

- Daniel Magalhães - [@Housecold](https://github.com/Housecold)
- Diogo Torres - [@Dmct30](https://github.com/Dmct30)
- Élio Botas - [@e-boot](https://github.com/e-boot)
- Teresa Baptista - [@Couldbetete](https://github.com/Couldbetete)
- Sérgio Conchinha - [@SConchinha](https://github.com/SConchinha)
