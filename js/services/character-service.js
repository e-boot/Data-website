const charUrl = 'http://stapi.co/api/v1/rest/character?uid=CHMA0000261620';

/**
 * Fetches character information from the API and returns a promise with the character's personal info.
 * 
 * @returns {Promise<{name: string, yearOfBirth: number, yearOfDeath: number, placeOfBirth: string, placeOfDeath: string}>}
 */
async function getCharacter() {
  try {
    const response = await fetch(charUrl);
    const data = await response.json();
    const character = data.character;
    
    const { name, placeOfBirth, yearOfBirth, yearOfDeath, placeOfDeath } = character;

    const personalInfo = {
      name,
      yearOfBirth,
      yearOfDeath,
      placeOfBirth,
      placeOfDeath,
    };

    return personalInfo;
  } catch (error) {
    console.error('Error fetching personal info:', error);
    throw error;
  }
}

/**
 * Fetches performer information from the API and returns a promise with an array of performer info objects.
 * 
 * @returns {Promise<Array<{name: string, dateOfBirth: string, placeOfBirth: string, dateOfDeath: string, placeOfDeath: string}>>}
 */
async function getPerformer() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { performers } = character;
    
        const performerInfo = performers.map((performer) => {
          const { name, dateOfBirth, placeOfBirth, dateOfDeath, placeOfDeath } = performer;
    
          return {
            name,
            dateOfBirth,
            placeOfBirth,
            dateOfDeath,
            placeOfDeath,
          };
        });
    
        return performerInfo;
      } catch (error) {
        console.error('Error fetching performer info:', error);
        throw error;
      }
}

/**
 * Fetches episode information from the API and returns a promise with an array of episode info objects.
 * 
 * @returns {Promise<Array<{title: string, seasonNumber: number, episodeNumber: number, usAirDate: string}>>}
 */
async function getEpisodes() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { episodes } = character;
    
        const episode = episodes.map((episode) => {
          const { title, seasonNumber, episodeNumber, usAirDate } = episode;
    
          return {
            title,
            seasonNumber,
            episodeNumber,
            usAirDate,
          };
        });
    
        return episode;
      } catch (error) {
        console.error('Error fetching episodes info:', error);
        throw error;
      } 
}

/**
 * Fetches movie information from the API and returns a promise with an array of movie info objects.
 * 
 * @returns {Promise<Array<{title: string, usReleaseDate: string, mainDirector: string}>>}
 */
async function getMovies() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { movies } = character;
    
        const moviesInfo = movies.map((movie) => {
          const { title, usReleaseDate, mainDirector } = movie;
    
          return {
            title,
            usReleaseDate,
            mainDirector: mainDirector.name,
          };
        });
    
        return moviesInfo;
      } catch (error) {
        console.error('Error fetching movies info:', error);
        throw error;
      }
}

/**
 * Fetches character relations information from the API and returns a promise with an array of character relations info objects.
 * 
 * @returns {Promise<Array<{type: string, targetName: string | sourceName: string}>>}
 */
async function getCharacterRelations() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { characterRelations } = character;
    
        const relationsInfo = characterRelations.map((relation) => {
            if (relation.source.name === 'Data') {
              return {
                type: relation.type,
                targetName: relation.target.name
              };
            } else if  (relation.target.name === 'Data') {
              return {
                type: relation.type,
                sourceName: relation.source.name,
              };
            }
          });
    
        return relationsInfo;
      } catch (error) {
        console.error('Error fetching character relations info:', error);
        throw error;
      }
}

/**
 * Fetches title information from the API and returns a promise with an array of title info objects.
 * 
 * @returns {Promise<Array<{name: string}>>}
 */
async function getTitles() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { titles } = character;
    
        const titlesInfo = titles.map((title) => {
          const { name } = title;
    
          return {
            name,
          };
        });
    
        return titlesInfo;
      } catch (error) {
        console.error('Error fetching titles info:', error);
        throw error;
      }
}

async function getOrganization() {
    try {
        const response = await fetch(charUrl);
        const data = await response.json();
        const character = data.character;
        
        const { organizations } = character;
    
        const organizationInfo = organizations.map((org) => {
          const { name } = org;
    
          return {
            name,
          };
        });
    
        return organizationInfo;
      } catch (error) {
        console.error('Error fetching organization info:', error);
        throw error;
      }
}

export {
    getCharacter,
    getPerformer,
    getEpisodes,
    getMovies,
    getCharacterRelations,
    getTitles,
    getOrganization
}